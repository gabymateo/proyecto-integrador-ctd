package com.backend.grupo5.common.helpers.error_description;

public enum ProductErrorDescription {
    PRODUCT_NOT_FOUND("product not found"),
    CATEGORY_NOT_PROVIDED("category not provided"),
    CITY_NOT_PROVIDED("city not provided"),
    FEATURE_NOT_FOUND("feature with given id was not found"),
    PRODUCT_NOT_AVAILABLE("product not available");


    private final String description;
    ProductErrorDescription(String description) {
        this.description = description;
    };


    public String getDescription() {
        return description;
    }
}
