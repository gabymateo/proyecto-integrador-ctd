package com.backend.grupo5.service.DTO.category;


import lombok.Data;

@Data
public class CategoryCreateDTO {
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
