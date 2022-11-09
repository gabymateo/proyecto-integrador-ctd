package com.backend.grupo5.controller;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.exceptions.ErrorHandler;
import com.backend.grupo5.common.exceptions.ResponseHandler;
import com.backend.grupo5.model.entities.Product;
import com.backend.grupo5.service.DTO.product.ProductCreateDTO;
import com.backend.grupo5.service.DTO.product.ProductModel;
import com.backend.grupo5.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @PostMapping
    public ResponseEntity<Object> create(@ModelAttribute ProductCreateDTO input) {
        try {
            Product product = this.productService.create(input, input.getFiles());
            return ResponseHandler.generateResponse(HttpStatus.CREATED, "success", product);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(HttpStatus.BAD_REQUEST, error.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable Long id) {
        try {
            Optional<Product> product = this.productService.getById(id);
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", product);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(HttpStatus.BAD_REQUEST, error.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<Object> search(
            @RequestParam(name = "name", required = false) String name,
            @RequestParam(name = "cityId", required = false) Long cityId,
            @RequestParam(name = "categoryId", required = false) Long categoryId,
            @RequestParam(name = "order", required = false) String order
    ) {
        try {
            System.out.println("controller" + " " + categoryId);
            ArrayList<Product> products = this.productService.search(name, categoryId, cityId, order);
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", products);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(HttpStatus.BAD_REQUEST, error.getMessage());
        }
    }
}
