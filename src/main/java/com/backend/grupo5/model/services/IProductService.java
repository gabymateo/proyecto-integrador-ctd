package com.backend.grupo5.model.services;

import com.backend.grupo5.model.entities.Product;
import com.backend.grupo5.service.DTO.product.ProductCreateDTO;
import com.backend.grupo5.service.DTO.product.ProductModel;
import com.backend.grupo5.service.DTO.product.ProductSearchDTO;
import com.backend.grupo5.service.DTO.product.ProductUpdateDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Optional;

public interface IProductService {
    Product create(ProductCreateDTO input, MultipartFile[] files);
    Optional<Product> getById(Long id);
    ArrayList<Product>search(String name, Long categoryId, Long cityId, String order);
    Product update(Long id, ProductUpdateDTO input);
    void delete(Long id);
}
