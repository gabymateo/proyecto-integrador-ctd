package com.backend.grupo5.service.DTO.category;


import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class CategoryCreateDTO {

    @NotEmpty(message = "Title is not allowed to be empty")
    @Size(min = 3, message = "Title must be at least 3 characters")
    private String title;
    private String description;
    private String imageURL;

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getImageURL() {
        return imageURL;
    }
}
