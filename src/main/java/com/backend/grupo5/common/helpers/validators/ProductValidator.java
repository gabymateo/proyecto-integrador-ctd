package com.backend.grupo5.common.helpers.validators;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.controller.input.product.ProductCreateDTO;
import org.springframework.http.HttpStatus;

public class ProductValidator {
    public static void validateCreate(ProductCreateDTO input) {
        if(input.getName() == null || input.getName().isEmpty()) {
            throw new ApplicationError("name not provided", HttpStatus.BAD_REQUEST);
        }
        if(input.getAddress() == null || input.getAddress().isEmpty()) {
            throw new ApplicationError("address not provided", HttpStatus.BAD_REQUEST);
        }
        if(input.getDescription() == null || input.getDescription().isEmpty()) {
            throw new ApplicationError("description not provided", HttpStatus.BAD_REQUEST);
        }
        if(input.getCityId() == null) {
            throw new ApplicationError("city not provided", HttpStatus.BAD_REQUEST);
        }
        if(input.getCategoryId() == null) {
            throw new ApplicationError("category not provided", HttpStatus.BAD_REQUEST);
        }
        if(input.getPrice() == null || input.getPrice().isEmpty()) {
            throw new ApplicationError("price not provided", HttpStatus.BAD_REQUEST);
        }
    }
}
