package com.backend.grupo5.common.helpers.mapper.category;

import com.backend.grupo5.common.helpers.mapper.IMapper;
import com.backend.grupo5.repository.entities.Category;
import com.backend.grupo5.service.DTO.category.CategoryCreateDTO;
import org.springframework.stereotype.Component;


@Component
public class CategoryDTOToCategory implements IMapper<CategoryCreateDTO, Category> {

    @Override
    public Category map(CategoryCreateDTO in) {
        Category category = new Category();
        category.setTitle(in.getTitle());
        category.setDescription(in.getDescription());
        return category;
    }
}
