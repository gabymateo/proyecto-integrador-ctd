package com.backend.grupo5.mapper;

import com.backend.grupo5.model.Category;
import com.backend.grupo5.service.DTO.category.CategoryCreateDTO;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;


@Component
public class CategoryDTOToCategoryEntity implements IMapper<CategoryCreateDTO, Category>{

    @Override
    public Category map(CategoryCreateDTO in) {
        Category category = new Category();

        category.setTitle(in.getTitle());
        category.setDescription(in.getDescription());
        category.setImageUrl(in.getImageURL());
        category.setCreateDate(LocalDateTime.now());
        return category;
    }
}
