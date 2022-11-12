package com.backend.grupo5.common.helpers.error_description;

public enum CityErrorDescription {
    CITY_NOT_FOUND("city with given id was not found");

    private final String description;
    CityErrorDescription(String description) {
        this.description = description;
    };


    public String getDescription() {
        return description;
    }
}

