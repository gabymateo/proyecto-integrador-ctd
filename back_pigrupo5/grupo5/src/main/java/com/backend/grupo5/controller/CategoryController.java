package com.backend.grupo5.controller;


import com.backend.grupo5.exceptions.ApplicationError;
import com.backend.grupo5.exceptions.ErrorHandler;
import com.backend.grupo5.exceptions.ResponseHandler;
import com.backend.grupo5.model.Category;
import com.backend.grupo5.service.CategoryService;
import com.backend.grupo5.service.DTO.category.CategoryCreateDTO;
import com.backend.grupo5.service.DTO.category.CategoryUpdateDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping()
    public ResponseEntity<Object> create(@Valid @RequestBody CategoryCreateDTO categoryCreateDTO) throws Exception {
        try {
            Category category = this.categoryService.create(categoryCreateDTO);
            return ResponseHandler.generateResponse(HttpStatus.CREATED, "success", category);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }catch (Exception e) {
            return ErrorHandler.generateErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<Object> getAll() throws Exception {
        try {
            ArrayList<Category> categories = this.categoryService.getAll();
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", categories);
        } catch (ApplicationError error ) {
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

    @PatchMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody CategoryUpdateDTO categoryUpdateDTO) {
        try {
            Category category = this.categoryService.update(id, categoryUpdateDTO);
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", category);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        try {
            this.categoryService.delete(id);
            return ResponseHandler.generateResponse(HttpStatus.NO_CONTENT, "Success", null);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }
}
