package com.backend.grupo5.service.DTO.product;

import lombok.Data;

@Data
public class ProductCreateDTO {

    private String name;
    private Long categoryId;

    public String getName() {
        return name;
    }

    public Long getCategoryId() {
        return categoryId;
    }
}
