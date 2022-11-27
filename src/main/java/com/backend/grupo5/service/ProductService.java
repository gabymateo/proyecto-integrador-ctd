package com.backend.grupo5.service;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.error_description.CategoryErrorDescription;
import com.backend.grupo5.common.helpers.error_description.CityErrorDescription;
import com.backend.grupo5.common.helpers.error_description.ProductErrorDescription;
import com.backend.grupo5.common.helpers.mapper.ProductDTOTOProduct;
import com.backend.grupo5.common.helpers.validators.ProductValidator;
import com.backend.grupo5.model.entities.ImageModel;
import com.backend.grupo5.model.entities.ProductModel;
import com.backend.grupo5.repository.*;
import com.backend.grupo5.repository.entities.*;
import com.backend.grupo5.model.services.IProductService;
import com.backend.grupo5.controller.input.product.ProductCreateDTO;
import com.backend.grupo5.controller.input.product.ProductUpdateDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.*;

@Service @RequiredArgsConstructor
public class ProductService implements IProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final CityRepository cityRepository;
    private final ProductDTOTOProduct mapper;
    private final AwsService awsService;
    private final ImageRepository imageRepository;
    private final ProductCustomRepository productCustomRepository;
    private final FeatureService featureService;

    @Override @Transactional
    public ProductModel create(ProductCreateDTO input, MultipartFile[] files) {
        //validate input
        ProductValidator.validateCreate(input);
        Product product = mapper.map(input);
        Set<Image> images = new HashSet<>();
        Set<Feature> features = new HashSet<>();
        //validate if category exists
        Optional<Category> category = this.categoryRepository.findById(input.getCategoryId());
        if(category.isEmpty()) {
            throw new ApplicationError(ProductErrorDescription.CATEGORY_NOT_PROVIDED.getDescription(), HttpStatus.BAD_REQUEST);
        }
        product.setCategory(category.get());
        //validate if city exists
        Optional<City> city = this.cityRepository.findById(input.getCityId());
        if(city.isEmpty()) {
            throw new ApplicationError(ProductErrorDescription.CITY_NOT_PROVIDED.getDescription(), HttpStatus.BAD_REQUEST);
        }
        product.setCity(city.get());
        //validate if features exits
        for (Long id : input.getFeatureIds()) {
            Optional<Feature> foundFeature = this.featureService.getById(id);
            if(foundFeature.isEmpty()) {
                throw new ApplicationError(ProductErrorDescription.FEATURE_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
            }
            features.add(foundFeature.get());
        }
        product.setFeatures(features);
        //upload image and relate to product
        for (MultipartFile file : files) {
            Image image = awsService.upload(file);
            image.setProduct(product);
            imageRepository.save(image);
            images.add(image);
        }
        product.setImages(images);
        this.productRepository.save(product);
        return ProductModel.ProductEntityToProduct(product, null, Optional.of(false));
    }

    @Override
    public Optional<ProductModel> getById(Long id) {
        Optional<Product> product = this.productRepository.findById(id);
        Set<ImageModel> images = new HashSet<>();
        if(product.isEmpty()) {
            throw new ApplicationError(ProductErrorDescription.PRODUCT_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }
        for(Image image : product.get().getImages()) {
            ImageModel imageModel = ImageModel.create(image);
            imageModel.setUrl(this.awsService.getByKey(image.getName_key()).toString());
            images.add(imageModel);
        }
        return Optional.of(ProductModel.ProductEntityToProduct(product.get(), images, Optional.of(true)));
    }

    public Page<ProductModel> search(String name, Long categoryId, Long cityId, String order, String sort, LocalDate startDate, LocalDate endDate, Long productId, Pageable pageable) {
        Page<Product> products = this.productCustomRepository.search(name, categoryId, cityId, order, sort, startDate, endDate, productId, pageable);
        ArrayList<ProductModel> productModels = new ArrayList<>();
        for(Product product : products) {
            Set<ImageModel> images = new HashSet<>();
            for (Image image : product.getImages()) {
                ImageModel imageModel = ImageModel.create(image);
                imageModel.setUrl(this.awsService.getByKey(image.getName_key()).toString());
                images.add(imageModel);
            }
            productModels.add(ProductModel.ProductEntityToProduct(product, images, Optional.of(false)));
        }
        return new PageImpl<>(productModels, products.getPageable(), products.getTotalElements());
    }

    @Override @Transactional
    public Product update(Long id, ProductUpdateDTO input, MultipartFile[] files) {

        Optional<Product> product = this.productRepository.findById(id);
        if(product.isEmpty()) {
            throw new ApplicationError(ProductErrorDescription.PRODUCT_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }

        if(input.getCategoryId() != null) {
            Optional<Category> category = this.categoryRepository.findById(input.getCategoryId());
            if(category.isEmpty()) {
                throw new ApplicationError(CategoryErrorDescription.CATEGORY_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
            }
            product.get().setCategory(category.get());
        }

        if(input.getCityId() != null) {
            Optional<City> city = this.cityRepository.findById(input.getCityId());
            if(city.isEmpty()) {
                throw new ApplicationError(CityErrorDescription.CITY_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
            }
            product.get().setCity(city.get());
        }

        if(input.getAddress() != null) {
            product.get().setAddress(input.getAddress());
        }

        if(input.getName() != null) {
            product.get().setName(input.getName());
        }

        if(input.getPrice() != null) {
            product.get().setPrice(input.getPrice());
        }

        if(input.getFeatures() != null && input.getFeatures().size() != 0) {
            for(Long feature : input.getFeatures()) {
                Optional<Feature> feature1 = this.featureService.getById(feature);
                if(feature1.isEmpty()) {
                    throw new ApplicationError("Feature id" + " " + feature + " " + "was not found", HttpStatus.NOT_FOUND);
                }
                product.get().getFeatures().add(feature1.get());
            }
        }

        if(input.getFeaturesToDelete() != null && input.getFeaturesToDelete().size() != 0) {
            for (Long feature : input.getFeaturesToDelete()) {
                Optional<Feature> feature1 = this.featureService.getById(feature);
                if(feature1.isEmpty()) {
                    throw new ApplicationError("Feature id" + " " + feature + " " + "was not found", HttpStatus.NOT_FOUND);
                }
                product.get().getFeatures().remove(feature1.get());
                feature1.get().getProducts().remove(product.get());
            }
        }

        if(input.getImagesToDelete() != null && input.getImagesToDelete().size() != 0) {
            for (Long imageId : input.getImagesToDelete()) {
                Optional<Image> image = this.imageRepository.findById(imageId);
                if(image.isEmpty()) {
                    throw new ApplicationError("Image id" + " " + imageId + " " + "was not found", HttpStatus.NOT_FOUND);
                }
                product.get().getImages().remove(image.get());
            }
        }

        if(files != null && files.length > 0) {
            for(MultipartFile file : files) {
                Image image = awsService.upload(file);
                image.setProduct(product.get());
                imageRepository.save(image);
                product.get().getImages().add(image);
            }
        }
        return this.productRepository.save(product.get());
    }

    @Override
    public void delete(Long id) {
        Optional<Product> product = this.productRepository.findById(id);
        if(product.isEmpty()) {
            throw  new ApplicationError(ProductErrorDescription.PRODUCT_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }
        product.get().getFeatures().removeAll(product.get().getFeatures());
        this.productRepository.delete(product.get());
    }
}
