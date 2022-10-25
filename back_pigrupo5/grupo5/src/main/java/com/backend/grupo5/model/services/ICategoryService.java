package com.backend.grupo5.model.services;

import com.backend.grupo5.model.entities.Category;
import com.backend.grupo5.service.DTO.category.CategoryCreateDTO;
import com.backend.grupo5.service.DTO.category.CategoryUpdateDTO;

import java.util.ArrayList;
import java.util.Optional;

public interface ICategoryService {

    Category create(CategoryCreateDTO category);
    Optional<Category> getById(Long id);
    ArrayList<Category> getAll();
    Category update(Long id, CategoryUpdateDTO category);
    void delete(Long id);
}
