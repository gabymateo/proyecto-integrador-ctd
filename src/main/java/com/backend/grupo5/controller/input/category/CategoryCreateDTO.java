package com.backend.grupo5.controller.input.category;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data @Getter @Setter
public class CategoryCreateDTO {
    private String title;
    private String description;
}
