package com.backend.grupo5.service;
import com.backend.grupo5.common.helpers.error_description.CategoryErrorDescription;
import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.validators.CategoryValidator;
import com.backend.grupo5.model.entities.Category;
import com.backend.grupo5.model.services.ICategoryService;
import com.backend.grupo5.repository.CategoryRepository;
import com.backend.grupo5.service.DTO.category.CategoryCreateDTO;
import com.backend.grupo5.common.helpers.mapper.CategoryDTOToCategory;
import com.backend.grupo5.service.DTO.category.CategoryUpdateDTO;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class CategoryService implements ICategoryService {

    private final CategoryRepository repository;
    private final CategoryDTOToCategory mapper;

    private final CategoryValidator validator;

    public CategoryService(
            CategoryRepository categoryRepository,
            CategoryDTOToCategory mapper,
            CategoryValidator validator)
    {
        this.repository = categoryRepository;
        this.mapper = mapper;
        this.validator = validator;
    }

    @Override
    public Category create(CategoryCreateDTO category) {
        //validate input
        this.validator.validateCreate(category);
        Category categoryEntity = mapper.map(category);
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

    @Override
    @Transactional
    public Category update(Long id, CategoryUpdateDTO categoryUpdateDTO) {
        //validate input
        this.validator.validateUpdate(categoryUpdateDTO);
        Optional<Category> category = this.repository.findById(id);
        if(category.isEmpty()) {
            throw new ApplicationError(CategoryErrorDescription.CATEGORY_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }
        if(categoryUpdateDTO.getTitle() != null) {
            category.get().setTitle(categoryUpdateDTO.getTitle());
        }
        if(categoryUpdateDTO.getDescription() != null) {
            category.get().setDescription(categoryUpdateDTO.getDescription());
        }
        if(categoryUpdateDTO.getImageURL() != null) {
            category.get().setImageUrl(categoryUpdateDTO.getImageURL());
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
