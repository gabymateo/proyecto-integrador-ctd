package com.backend.grupo5.model.services;

import com.backend.grupo5.model.entities.Product;
import com.backend.grupo5.service.DTO.product.ProductCreateDTO;
import com.backend.grupo5.service.DTO.product.ProductSearchDTO;
import com.backend.grupo5.service.DTO.product.ProductUpdateDTO;

import java.util.ArrayList;
import java.util.Optional;

public interface IProductService {
    Product create(ProductCreateDTO input);
    Optional<Product> getById(Long id);
    ArrayList<Product>search(String name);
    Product update(Long id, ProductUpdateDTO input);
    void delete(Long id);
}
