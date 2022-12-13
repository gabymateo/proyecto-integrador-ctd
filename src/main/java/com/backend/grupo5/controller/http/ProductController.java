package com.backend.grupo5.controller.http;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.exceptions.ErrorHandler;
import com.backend.grupo5.common.exceptions.ResponseHandler;
import com.backend.grupo5.controller.input.product.ProductUpdateDTO;
import com.backend.grupo5.model.entities.ProductModel;
import com.backend.grupo5.model.services.IProductService;
import com.backend.grupo5.controller.input.product.ProductCreateDTO;
import com.backend.grupo5.repository.entities.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Optional;

@Controller @RequestMapping("/products") @RequiredArgsConstructor
public class ProductController {
    private final IProductService productService;

    @PostMapping(value = "/")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Object> create(@ModelAttribute("body") ProductCreateDTO input) {
        try {
            System.out.println(input);
            ProductModel product = this.productService.create(input, input.getFiles());
            return ResponseHandler.generateResponse(HttpStatus.CREATED, "success", product);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(HttpStatus.BAD_REQUEST, error.getMessage());
        } catch (IOException e) {
            throw new RuntimeException(e);
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
            @RequestParam(name = "checkIn", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam(name = "checkOut", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate,
            @RequestParam(name = "page", required = false) String page
    ) {
        try {
            int parsedPage = page != null ? Integer.parseInt(page) : 0;
            int parsedSize = size != null ? Integer.parseInt(size) : 8;
            Page<ProductModel> products = this.productService.search(name, categoryId, cityId, order, sort, startDate, endDate, null, PageRequest.of(parsedPage, parsedSize));
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", products.getContent(), products.getPageable());
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @PatchMapping("/{id}") @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<Object> update(@ModelAttribute ProductUpdateDTO input, @PathVariable Long id) throws IOException {
        try {
            Product productModel = this.productService.update(id, input, input.getFiles());
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", productModel);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        try {
            this.productService.delete(id);
            return ResponseHandler.generateResponse(HttpStatus.NO_CONTENT, "success", null);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }
}
