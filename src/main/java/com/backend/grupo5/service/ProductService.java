package com.backend.grupo5.service;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.error_description.ProductErrorDescription;
import com.backend.grupo5.common.helpers.mapper.ProductDTOTOProduct;
import com.backend.grupo5.repository.*;
import com.backend.grupo5.repository.entities.Category;
import com.backend.grupo5.repository.entities.City;
import com.backend.grupo5.repository.entities.Image;
import com.backend.grupo5.repository.entities.Product;
import com.backend.grupo5.model.services.IProductService;
import com.backend.grupo5.service.DTO.product.ProductCreateDTO;
import com.backend.grupo5.service.DTO.product.ProductUpdateDTO;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityManager;
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

    public ProductService(
            ProductRepository productRepository,
            CategoryRepository categoryRepository,
            CityRepository cityRepository, ProductDTOTOProduct mapper,
            AwsService awsService,
            ImageRepository imageRepository,
            ProductCustomRepository productCustomRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.cityRepository = cityRepository;
        this.mapper = mapper;
        this.awsService = awsService;
        this.imageRepository = imageRepository;
        this.productCustomRepository = productCustomRepository;
    }


    @Override
    @Transactional
    public Product create(ProductCreateDTO input, MultipartFile[] files) {
        Product product = mapper.map(input);
        Set<Image> images = new HashSet<>();
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
        product.setCategory(category.get());
        product.setCity(city.get());
        //upload image and relate to product
        for (MultipartFile file : files) {
            Image image = awsService.upload(file);
            image.setProduct(product);
            image.setUrl(awsService.getById(image.getKey()).toString());
            imageRepository.save(image);
            images.add(image);
        }
        product.setImages(images);
        return this.productRepository.save(product);
    }

    @Override
    public Optional<Product> getById(Long id) {
        Optional<Product> product = this.productRepository.findById(id);
        if(product.isEmpty()) {
            throw new ApplicationError(ProductErrorDescription.PRODUCT_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }
        return product;
    }

    @Override
    public ArrayList<Product> search(
            String name,
            Long categoryId,
            Long cityId,
            String order
    ) {
        return this.productCustomRepository.search(name, categoryId, cityId, order);
    }

    @Override
    public Product update(Long id, ProductUpdateDTO input) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
