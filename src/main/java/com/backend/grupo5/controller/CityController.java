package com.backend.grupo5.controller;


import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.exceptions.ErrorHandler;
import com.backend.grupo5.common.exceptions.ResponseHandler;
import com.backend.grupo5.model.services.ICityService;
import com.backend.grupo5.repository.entities.City;
import com.backend.grupo5.service.DTO.city.CityCreateDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController @RequestMapping("/cities") @RequiredArgsConstructor
public class CityController {
    private final ICityService cityService;

    @PostMapping("/")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Object> create(@RequestBody CityCreateDTO input) {
        try {
            City city = this.cityService.create(input);
            return ResponseHandler.generateResponse(HttpStatus.CREATED, "success", city);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable Long id) {
        try {
            Optional<City> city = this.cityService.getById(id);
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", city);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAll() {
        try {
            ArrayList<City> cities = this.cityService.getAll();
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", cities);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        try {
            this.cityService.delete(id);
            return ResponseHandler.generateResponse(HttpStatus.NO_CONTENT, "success", null);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }
}
