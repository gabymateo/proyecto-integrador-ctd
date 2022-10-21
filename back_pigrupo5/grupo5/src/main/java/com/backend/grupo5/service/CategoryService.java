package com.backend.grupo5.service;

import com.backend.grupo5.execptions.ApplicationError;
import com.backend.grupo5.model.Category;
import com.backend.grupo5.repository.CategoryRepository;
import com.backend.grupo5.service.DTO.category.CategoryCreateDTO;
import com.backend.grupo5.mapper.CategoryDTOToCategoryEntity;
import com.backend.grupo5.service.DTO.category.CategoryUpdateDTO;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository repository;
    private final CategoryDTOToCategoryEntity mapper;

    public CategoryService(
            CategoryRepository categoryRepository,
            CategoryDTOToCategoryEntity mapper
    )
    {
        this.repository = categoryRepository;
        this.mapper = mapper;
    }

    public Category create(CategoryCreateDTO category) {
        Category categoryEntity = mapper.map(category);
        return this.repository.save(categoryEntity);
    }

    public Optional<Category> getById(Long id) {
        Optional<Category> category = this.repository.findById(id);
        if(category.isEmpty()) {
            throw new ApplicationError("Category not found", HttpStatus.NOT_FOUND);
        }
        return category;
    }

    public ArrayList<Category> getAll() {
        return (ArrayList<Category>) this.repository.findAll();
    }

    @Transactional
    public Category update(Long id, CategoryUpdateDTO categoryUpdateDTO) {
        Optional<Category> category = this.repository.findById(id);
        if(category.isEmpty()) {
            throw new ApplicationError("Category not found", HttpStatus.NOT_FOUND);
        }
        if(categoryUpdateDTO.getTitle().isPresent()) {
            category.get().setTitle(categoryUpdateDTO.getTitle().get());
        }
        if(categoryUpdateDTO.getDescription().isPresent() && categoryUpdateDTO.getDescription() != null) {
            category.get().setDescription(categoryUpdateDTO.getDescription().get());
        }
        return this.repository.save(category.get());
    }

    public void delete(Long id) {
        Optional<Category> category = this.repository.findById(id);
        if(category.isEmpty()) {
            throw new ApplicationError("Category not found", HttpStatus.NOT_FOUND);
        }
        this.repository.delete(category.get());
    }

}
