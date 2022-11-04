package com.backend.grupo5.common.helpers.error_description;

public enum CategoryErrorDescription {
    CATEGORY_NOT_FOUND("Category not found"),
    TITLE_NOT_PROVIDED("title not provided"),
    DESCRIPTION_NOT_PROVIDED("description not provided"),
    INVALID_LENGTH("length must be at least one");



    private final String description;
    CategoryErrorDescription(String description) {
        this.description = description;
    };


    public String getDescription() {
        return description;
    }
}
