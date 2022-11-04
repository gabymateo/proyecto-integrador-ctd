package com.backend.grupo5.common.helpers.mapper;

import com.backend.grupo5.model.entities.Product;
import com.backend.grupo5.service.DTO.product.ProductCreateDTO;
import org.springframework.stereotype.Component;

@Component
public class ProductDTOTOProduct implements IMapper<ProductCreateDTO, Product>{
    @Override
    public Product map(ProductCreateDTO in) {
        Product product = new Product();
        product.setName(in.getName());
        return product;
    }
}
