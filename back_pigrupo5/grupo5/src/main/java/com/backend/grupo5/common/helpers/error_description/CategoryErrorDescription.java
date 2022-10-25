package com.backend.grupo5.common.helpers.error_description;

public enum CategoryErrorDescription {
    CATEGORY_NOT_FOUND("Category not found");

    private final String description;
    CategoryErrorDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
