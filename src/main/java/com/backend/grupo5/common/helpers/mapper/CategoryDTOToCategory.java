package com.backend.grupo5.common.helpers.mapper;

import com.backend.grupo5.model.entities.Category;
import com.backend.grupo5.service.DTO.category.CategoryCreateDTO;
import org.springframework.stereotype.Component;

import java.util.Date;


@Component
public class CategoryDTOToCategory implements IMapper<CategoryCreateDTO, Category>{

    @Override
    public Category map(CategoryCreateDTO in) {
        Category category = new Category();
        category.setTitle(in.getTitle());
        category.setDescription(in.getDescription());
        category.setImageUrl(in.getImageURL());
        category.setCreateDate(new Date());
        return category;
    }
}
