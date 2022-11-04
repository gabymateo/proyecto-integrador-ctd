package com.backend.grupo5.common.exceptions;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class ApplicationError extends RuntimeException {

    private String message;
    private HttpStatus httpStatus;

    public ApplicationError(String message, HttpStatus httpStatus) {
        super(message);
        this.message = message;
        this.httpStatus = httpStatus;
    }

    public String getMessage() {
        return message;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
