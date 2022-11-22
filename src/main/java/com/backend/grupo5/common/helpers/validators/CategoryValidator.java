package com.backend.grupo5.common.helpers.validators;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.error_description.CategoryErrorDescription;
import com.backend.grupo5.controller.input.category.CategoryCreateDTO;
import com.backend.grupo5.controller.input.category.CategoryUpdateDTO;
import org.springframework.http.HttpStatus;

public class CategoryValidator {

    public static void validateCreate(CategoryCreateDTO input) throws ApplicationError {
        if(input.getTitle().isEmpty() || input.getTitle() == null) {
            throw new ApplicationError(CategoryErrorDescription.TITLE_NOT_PROVIDED.getDescription(), HttpStatus.BAD_REQUEST);
        }
        if(input.getDescription().isEmpty() || input.getDescription() == null) {
            throw new ApplicationError(CategoryErrorDescription.DESCRIPTION_NOT_PROVIDED.getDescription(), HttpStatus.BAD_REQUEST);
        }
    }

    public static void validateUpdate(CategoryUpdateDTO input) throws ApplicationError {
        if(input.getTitle() != null) {
            if (input.getTitle().isEmpty()) {
                throw new ApplicationError(CategoryErrorDescription.INVALID_LENGTH.getDescription(), HttpStatus.BAD_REQUEST);
            }
        }
        if(input.getDescription() != null) {
            if(input.getDescription().isEmpty()) {
                throw new ApplicationError(CategoryErrorDescription.INVALID_LENGTH.getDescription(), HttpStatus.BAD_REQUEST);
            }
        }
    }



}
