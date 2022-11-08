package com.backend.grupo5.common.helpers.error_description;

public enum ProductErrorDescription {
    PRODUCT_NOT_FOUND("product not found"),
    CATEGORY_NOT_PROVIDED("category not provided"),
    CITY_NOT_PROVIDED("city not provided");


    private final String description;
    ProductErrorDescription(String description) {
        this.description = description;
    };


    public String getDescription() {
        return description;
    }
}
