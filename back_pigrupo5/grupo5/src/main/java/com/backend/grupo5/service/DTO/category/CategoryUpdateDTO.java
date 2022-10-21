package com.backend.grupo5.service.DTO.category;

import java.util.Optional;

public class CategoryUpdateDTO {

    private Optional<String> title;
    private Optional<String> description;

    public Optional<String> getTitle() {
        return title;
    }

    public Optional<String> getDescription() {
        return description;
    }
}
