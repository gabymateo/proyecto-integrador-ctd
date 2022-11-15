package com.backend.grupo5.controller;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.exceptions.ErrorHandler;
import com.backend.grupo5.common.exceptions.ResponseHandler;
import com.backend.grupo5.model.entities.ProductModel;
import com.backend.grupo5.repository.entities.Product;
import com.backend.grupo5.service.DTO.product.ProductCreateDTO;
import com.backend.grupo5.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
            ProductModel product = this.productService.create(input, input.getFiles());
            return ResponseHandler.generateResponse(HttpStatus.CREATED, "success", product);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(HttpStatus.BAD_REQUEST, error.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable Long id) {
        try {
            Optional<ProductModel> product = this.productService.getById(id);
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", product);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(HttpStatus.BAD_REQUEST, error.getMessage());
        }
    }

//    @GetMapping("/")
//    public ResponseEntity<Object> search(
//            @RequestParam(name = "name", required = false) String name,
//            @RequestParam(name = "cityId", required = false) Long cityId,
//            @RequestParam(name = "categoryId", required = false) Long categoryId,
//            @RequestParam(name = "order", required = false) String order,
//            @RequestParam(name = "size", required = false) int size,
//            @RequestParam(name = "page", required = false) int page
//    ) {
//        try {
//            ArrayList<ProductModel> products = this.productService.search(name, categoryId, cityId, order);
//            return ResponseHandler.generateResponse(HttpStatus.OK, "success", products);
//        } catch (ApplicationError error) {
//            return ErrorHandler.generateErrorResponse(HttpStatus.BAD_REQUEST, error.getMessage());
//        }
//    }

    @GetMapping("/")
    public ResponseEntity<Object> search(
            @RequestParam(name = "name", required = false) String name,
            @RequestParam(name = "cityId", required = false) Long cityId,
            @RequestParam(name = "categoryId", required = false) Long categoryId,
            @RequestParam(name = "order", required = false) String order,
            @RequestParam(name= "sort", required = false) String sort,
            @RequestParam(name = "size", required = false) int size,
            @RequestParam(name = "page", required = false) int page
    ) {
        try {
            Page<ProductModel> products = this.productService.searchTest(name, categoryId, cityId, order, sort, PageRequest.of(page, size));
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", products.getContent(), products.getPageable());
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        try {
            this.productService.delete(id);
            return ResponseHandler.generateResponse(HttpStatus.NO_CONTENT, "success", null);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }
}
