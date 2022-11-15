package com.backend.grupo5.controller;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.exceptions.ErrorHandler;
import com.backend.grupo5.common.exceptions.ResponseHandler;
import com.backend.grupo5.model.services.IRoleService;
import com.backend.grupo5.repository.entities.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController @RequestMapping("/roles") @RequiredArgsConstructor
public class RoleController {

    private final IRoleService roleService;

    @PostMapping("/")
    public ResponseEntity<Object> create(@RequestBody Role input) {
        try {
            Role role = this.roleService.create(input);
            return ResponseHandler.generateResponse(HttpStatus.CREATED, "success", role);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }
}
