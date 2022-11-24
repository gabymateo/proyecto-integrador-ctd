package com.backend.grupo5.controller.http;


import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.exceptions.ErrorHandler;
import com.backend.grupo5.common.exceptions.ResponseHandler;
import com.backend.grupo5.model.services.ICategoryService;
import com.backend.grupo5.repository.entities.Category;

import com.backend.grupo5.controller.input.category.CategoryCreateDTO;
import com.backend.grupo5.controller.input.category.CategoryUpdateDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController @RequestMapping("/categories") @RequiredArgsConstructor
public class CategoryController {

    private final ICategoryService categoryService;

    @PostMapping("/") @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Object> create(@RequestBody CategoryCreateDTO categoryCreateDTO)  {
        try {
            Category category = this.categoryService.create(categoryCreateDTO);
            return ResponseHandler.generateResponse(HttpStatus.CREATED, "success", category);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAll() {
        try {
            ArrayList<Category> categories = this.categoryService.getAll();
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", categories);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable Long id) {
        try {
            Optional<Category> category = this.categoryService.getById(id);
            return ResponseHandler.generateResponse(HttpStatus.OK,"success", category);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @PatchMapping("/{id}") @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody CategoryUpdateDTO categoryUpdateDTO) {
        try {
            Category category = this.categoryService.update(id, categoryUpdateDTO);
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", category);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @DeleteMapping("/{id}") @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        try {
            this.categoryService.delete(id);
            return ResponseHandler.generateResponse(HttpStatus.NO_CONTENT, "Success", null);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }
}
