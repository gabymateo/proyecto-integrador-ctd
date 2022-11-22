package com.backend.grupo5.common.helpers.error_description;

public enum BookingErrorDescription {

    USER_NOT_FOUND("user with given id was not found");


    private final String description;
    BookingErrorDescription(String description) {
        this.description = description;
    };

    public String getDescription() {
        return description;
    }
}
