package com.backend.grupo5.common.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
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

    //input handler
//    @ExceptionHandler(MethodArgumentNotValidException.class)
//    public ResponseEntity<?> inputValidationError(MethodArgumentNotValidException ex) {
//        Map<String, Object> response = new HashMap<>();
//        response.put("status", "error");
//        response.put("data", ex.getBindingResult().getFieldError().getDefaultMessage());
//        return new ResponseEntity<Object>(response, HttpStatus.BAD_REQUEST);
//    }

}
