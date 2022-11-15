package com.backend.grupo5.common.helpers.enums;

public enum FeatureType {

    POLICY("policy"),
    SECURITY("security");

    private final String description;
    FeatureType(String description) {
        this.description = description;
    };

    public String getDescription() {
        return description;
    }
}
