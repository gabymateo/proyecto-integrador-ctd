package com.backend.grupo5.common.helpers.validators;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.controller.input.feature.FeatureCreateDTO;
import org.springframework.http.HttpStatus;

public class FeatureValidator {

    public static void validateCreate(FeatureCreateDTO input) {
        if(input.getName() == null || input.getName().isEmpty()) {
            throw new ApplicationError("name not provided", HttpStatus.BAD_REQUEST);
        }
        if(input.getType() == null || input.getType().isEmpty()) {
            throw new ApplicationError("type not provided", HttpStatus.BAD_REQUEST);
        }
    }
}
