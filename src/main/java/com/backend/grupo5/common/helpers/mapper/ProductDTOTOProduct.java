package com.backend.grupo5.common.helpers.mapper;

import com.backend.grupo5.repository.entities.Product;
import com.backend.grupo5.controller.input.product.ProductCreateDTO;
import org.springframework.stereotype.Component;

@Component
public class ProductDTOTOProduct implements IMapper<ProductCreateDTO, Product>{
    @Override
    public Product map(ProductCreateDTO in) {
        Product product = new Product();
        product.setName(in.getName());
        product.setAddress(in.getAddress());
        product.setPrice(in.getPrice());
        product.setAvailability(in.isAvailability());
        product.setDescription(in.getDescription());
        product.setDescriptionTitle(in.getDescriptionTitle());
        return product;
    }
}
