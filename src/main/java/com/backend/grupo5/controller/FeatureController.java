package com.backend.grupo5.controller;


import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.exceptions.ErrorHandler;
import com.backend.grupo5.common.exceptions.ResponseHandler;
import com.backend.grupo5.model.services.IFeatureService;
import com.backend.grupo5.repository.entities.Feature;
import com.backend.grupo5.service.DTO.feature.FeatureCreateDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController @RequestMapping("/features") @RequiredArgsConstructor
public class FeatureController {
    private final IFeatureService featureService;

    @PostMapping("/")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Object> create(@RequestBody FeatureCreateDTO input) {
        try {
            Feature feature = this.featureService.create(input);
            return ResponseHandler.generateResponse(HttpStatus.CREATED, "success", feature);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable Long id){
        try {
            Optional<Feature> feature = this.featureService.getById(id);
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", feature);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAll() {
        try {
            ArrayList<Feature> features = this.featureService.getAll();
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", features);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        try {
            this.featureService.delete(id);
            return ResponseHandler.generateResponse(HttpStatus.NO_CONTENT, "success", null);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }
}
