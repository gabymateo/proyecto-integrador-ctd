package com.backend.grupo5.execptions;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ResponseHandler extends ResponseEntityExceptionHandler {

    public static ResponseEntity<Object> generateResponse(HttpStatus status, String message, Object responseObj) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("status", message);
        map.put("data", responseObj);
        return new ResponseEntity<Object>(map,status);
    }

}
