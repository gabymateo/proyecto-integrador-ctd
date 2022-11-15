package com.backend.grupo5.service;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.error_description.ProductErrorDescription;
import com.backend.grupo5.common.helpers.mapper.ProductDTOTOProduct;
import com.backend.grupo5.model.entities.ImageModel;
import com.backend.grupo5.model.entities.ProductModel;
import com.backend.grupo5.repository.*;
import com.backend.grupo5.repository.entities.*;
import com.backend.grupo5.model.services.IProductService;
import com.backend.grupo5.service.DTO.product.ProductCreateDTO;
import com.backend.grupo5.service.DTO.product.ProductUpdateDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class ProductService implements IProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final CityRepository cityRepository;
    private final ProductDTOTOProduct mapper;
    private final AwsService awsService;
    private final ImageRepository imageRepository;
    private final ProductCustomRepository productCustomRepository;
    private final FeatureService featureService;

    public ProductService(
            ProductRepository productRepository,
            CategoryRepository categoryRepository,
            CityRepository cityRepository, ProductDTOTOProduct mapper,
            AwsService awsService,
            ImageRepository imageRepository,
            ProductCustomRepository productCustomRepository, FeatureRepository featureRepository, FeatureService featureService) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.cityRepository = cityRepository;
        this.mapper = mapper;
        this.awsService = awsService;
        this.imageRepository = imageRepository;
        this.productCustomRepository = productCustomRepository;
        this.featureService = featureService;
    }


    @Override
    @Transactional
    public ProductModel create(ProductCreateDTO input, MultipartFile[] files) {
        Product product = mapper.map(input);
        Set<Image> images = new HashSet<>();
        Set<Feature> features = new HashSet<>();
        //validate if category exists
        Optional<Category> category = this.categoryRepository.findById(input.getCategoryId());
        if(category.isEmpty()) {
            throw new ApplicationError(ProductErrorDescription.CATEGORY_NOT_PROVIDED.getDescription(), HttpStatus.BAD_REQUEST);
        }
        //validate if city exists
        Optional<City> city = this.cityRepository.findById(input.getCityId());
        if(city.isEmpty()) {
            throw new ApplicationError(ProductErrorDescription.CITY_NOT_PROVIDED.getDescription(), HttpStatus.BAD_REQUEST);
        }
        //validate if features exits
        for (Long id : input.getFeatureIds()) {
            Optional<Feature> foundFeature = this.featureService.getById(id);
            if(foundFeature.isEmpty()) {
                throw new ApplicationError("not found", HttpStatus.NOT_FOUND);
            }
            features.add(foundFeature.get());
        }
        product.setCategory(category.get());
        product.setCity(city.get());
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
        return ProductModel.ProductEntityToProduct(product, Optional.empty(), Optional.of(false));
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
        return Optional.of(ProductModel.ProductEntityToProduct(product.get(), Optional.of(images), Optional.of(true)));
    }

    @Override
    public ArrayList<ProductModel> search(String name, Long categoryId, Long cityId, String order) {
        ArrayList<Product> products = this.productCustomRepository.search(name, categoryId, cityId, order);
        ArrayList<ProductModel> productModels = new ArrayList<>();
        for(Product product : products) {
            Set<ImageModel> images = new HashSet<>();
            for (Image image : product.getImages()) {
                ImageModel imageModel = ImageModel.create(image);
                imageModel.setUrl(this.awsService.getByKey(image.getName_key()).toString());
                images.add(imageModel);
            }
            productModels.add(ProductModel.ProductEntityToProduct(product, Optional.of(images), Optional.of(true)));
        }
        return productModels;
    }

    public Page<ProductModel> searchTest(String name, Long categoryId, Long cityId, String order, String sort, Pageable pageable) {
        Page<Product> products = this.productCustomRepository.test(name, categoryId, cityId, order, sort, pageable);
        ArrayList<ProductModel> productModels = new ArrayList<>();
        for(Product product : products) {
            Set<ImageModel> images = new HashSet<>();
            for (Image image : product.getImages()) {
                ImageModel imageModel = ImageModel.create(image);
                imageModel.setUrl(this.awsService.getByKey(image.getName_key()).toString());
                images.add(imageModel);
            }
            productModels.add(ProductModel.ProductEntityToProduct(product, Optional.of(images), Optional.of(true)));
        }

        return new PageImpl<>(productModels, products.getPageable(), products.getTotalElements());

    }

    @Override
    public Product update(Long id, ProductUpdateDTO input) {
        return null;
    }

    @Override
    public void delete(Long id) {
        Optional<Product> product = this.productRepository.findById(id);
        if(product.isEmpty()) {
            throw  new ApplicationError("not found", HttpStatus.NOT_FOUND);
        }
        product.get().getFeatures().removeAll(product.get().getFeatures());
        this.productRepository.delete(product.get());
    }
}
