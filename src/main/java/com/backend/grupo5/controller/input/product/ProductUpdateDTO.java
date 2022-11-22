package com.backend.grupo5.controller.input.product;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductUpdateDTO {

    private String name;
    private Long categoryId;

    public String getName() {
        return name;
    }

    public Long getCategoryId() {
        return categoryId;
    }
}
