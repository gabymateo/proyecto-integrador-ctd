package com.backend.grupo5.common.helpers.validators;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.controller.input.city.CityCreateDTO;
import org.springframework.http.HttpStatus;

public class CityValidator {

    public static void validateCreate(CityCreateDTO input) {
        if(input.getName() == null || input.getName().isEmpty()) {
            throw new ApplicationError("name not provided", HttpStatus.BAD_REQUEST);
        }
        if(input.getState() == null || input.getState().isEmpty()) {
            throw new ApplicationError("state not provided", HttpStatus.BAD_REQUEST);
        }
        if(input.getCountry() == null || input.getCountry().isEmpty()) {
            throw new ApplicationError("country not provided", HttpStatus.BAD_REQUEST);
        }
    }
}
