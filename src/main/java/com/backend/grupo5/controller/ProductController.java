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
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@Controller
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @PostMapping(value = "/")
    @PreAuthorize("hasAuthority('ADMIN')")
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


    @GetMapping("/")
    public ResponseEntity<Object> search(
            @RequestParam(name = "name", required = false) String name,
            @RequestParam(name = "cityId", required = false) Long cityId,
            @RequestParam(name = "categoryId", required = false) Long categoryId,
            @RequestParam(name = "order", required = false) String order,
            @RequestParam(name= "sort", required = false) String sort,
            @RequestParam(name = "size", required = false) String size,
            @RequestParam(name = "page", required = false) String page
    ) {
        try {
            int parsedPage = page != null ? Integer.parseInt(page) : 0;
            int parsedSize = size != null ? Integer.parseInt(size) : 5;
            Page<ProductModel> products = this.productService.searchTest(name, categoryId, cityId, order, sort, PageRequest.of(parsedPage, parsedSize));
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", products.getContent(), products.getPageable());
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        try {
            this.productService.delete(id);
            return ResponseHandler.generateResponse(HttpStatus.NO_CONTENT, "success", null);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }
}
