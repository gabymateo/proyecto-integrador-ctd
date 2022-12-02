package com.backend.grupo5.common.helpers.validators;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.controller.input.UserCreateInput;
import org.springframework.http.HttpStatus;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UserValidator {

    public static final Pattern VALID_EMAIL_ADDRESS_REGEX =
            Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

    public static boolean validate(String emailStr) {
        Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
        return matcher.find();
    }

    public static void validateCreate(UserCreateInput input) {
        if(input.getEmail() != null) {
            boolean match = validate(input.getEmail());
            if(!match) {
                throw new ApplicationError("invalid email", HttpStatus.BAD_REQUEST);
            }
        }else {
            throw new ApplicationError("email is required", HttpStatus.BAD_REQUEST);
        }

        if(input.getName() == null || input.getName().isEmpty()) {
            throw new ApplicationError("name is required", HttpStatus.BAD_REQUEST);
        }

        if(input.getLastName().isEmpty() || input.getLastName() == null) {
            throw new ApplicationError("last name is required", HttpStatus.BAD_REQUEST);
        }

        if(input.getPassword().isEmpty() || input.getPassword() == null) {
            throw new ApplicationError("password is required", HttpStatus.BAD_REQUEST);
        }
    }
}
