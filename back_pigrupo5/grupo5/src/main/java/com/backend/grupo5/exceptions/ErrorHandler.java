package com.backend.grupo5.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ErrorHandler extends ResponseEntityExceptionHandler {
    public static ResponseEntity<Object> generateErrorResponse(HttpStatus httpStatus, String message) {
        Map<String, Object> response = new HashMap<String, Object>();
        response.put("status", "error");
        response.put("data", message);
        return new ResponseEntity<Object>(response, httpStatus);
    }
}
