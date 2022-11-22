package com.backend.grupo5.model.services;

import com.backend.grupo5.repository.entities.Category;
import com.backend.grupo5.controller.input.category.CategoryCreateDTO;
import com.backend.grupo5.controller.input.category.CategoryUpdateDTO;

import java.util.ArrayList;
import java.util.Optional;

public interface ICategoryService {

    Category create(CategoryCreateDTO category);
    Optional<Category> getById(Long id);
    ArrayList<Category> getAll();
    Category update(Long id, CategoryUpdateDTO category);
    void delete(Long id);
}
