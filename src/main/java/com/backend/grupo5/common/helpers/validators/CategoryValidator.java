package com.backend.grupo5.common.helpers.validators;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.error_description.CategoryErrorDescription;
import com.backend.grupo5.service.DTO.category.CategoryCreateDTO;
import com.backend.grupo5.service.DTO.category.CategoryUpdateDTO;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
public class CategoryValidator {

    public void validateCreate(CategoryCreateDTO input) throws ApplicationError {
        if(input.getTitle().isEmpty() || input.getTitle().length() < 1) {
            throw new ApplicationError(CategoryErrorDescription.TITLE_NOT_PROVIDED.getDescription(), HttpStatus.BAD_REQUEST);
        }
        if(input.getDescription().isEmpty() || input.getDescription().length() < 1) {
            throw new ApplicationError(CategoryErrorDescription.DESCRIPTION_NOT_PROVIDED.getDescription(), HttpStatus.BAD_REQUEST);
        }
    }

    public void validateUpdate(CategoryUpdateDTO input) throws ApplicationError {
        if(input.getTitle() != null) {
            if (input.getTitle().length() < 1) {
                throw new ApplicationError(CategoryErrorDescription.INVALID_LENGTH.getDescription(), HttpStatus.BAD_REQUEST);
            }
        }
        if(input.getDescription() != null) {
            if(input.getDescription().length() < 1) {
                throw new ApplicationError(CategoryErrorDescription.INVALID_LENGTH.getDescription(), HttpStatus.BAD_REQUEST);
            }
        }
    }

}
