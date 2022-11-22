package com.backend.grupo5.service;
import com.backend.grupo5.common.helpers.error_description.CategoryErrorDescription;
import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.validators.CategoryValidator;
import com.backend.grupo5.repository.entities.Category;
import com.backend.grupo5.model.services.ICategoryService;
import com.backend.grupo5.repository.CategoryRepository;
import com.backend.grupo5.controller.input.category.CategoryCreateDTO;
import com.backend.grupo5.common.helpers.mapper.category.CategoryDTOToCategory;
import com.backend.grupo5.controller.input.category.CategoryUpdateDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Service @RequiredArgsConstructor
public class CategoryService implements ICategoryService {

    private final CategoryRepository repository;
    private final CategoryDTOToCategory mapper;

    @Override
    public Category create(CategoryCreateDTO input) {
        CategoryValidator.validateCreate(input);
        Category categoryEntity = mapper.map(input);
        return this.repository.save(categoryEntity);
    }

    @Override
    public Optional<Category> getById(Long id) {
        Optional<Category> category = this.repository.findById(id);
        if(category.isEmpty()) {
            throw new ApplicationError(CategoryErrorDescription.CATEGORY_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }
        return category;
    }

    @Override
    public ArrayList<Category> getAll() {
        return (ArrayList<Category>) this.repository.findAll();
    }

    @Override @Transactional
    public Category update(Long id, CategoryUpdateDTO input) {
        CategoryValidator.validateUpdate(input);
        Optional<Category> category = this.repository.findById(id);
        if(category.isEmpty()) {
            throw new ApplicationError(CategoryErrorDescription.CATEGORY_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }
        if(input.getTitle() != null) {
            category.get().setTitle(input.getTitle());
        }
        if(input.getDescription() != null) {
            category.get().setDescription(input.getDescription());
        }
        return this.repository.save(category.get());
    }

    @Override
    public void delete(Long id) {
        Optional<Category> category = this.repository.findById(id);
        if(category.isEmpty()) {
            throw new ApplicationError(CategoryErrorDescription.CATEGORY_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }
        this.repository.delete(category.get());
    }

}
