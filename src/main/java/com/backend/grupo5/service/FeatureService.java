package com.backend.grupo5.service;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.enums.FeatureType;
import com.backend.grupo5.model.services.IFeatureService;
import com.backend.grupo5.repository.FeatureRepository;
import com.backend.grupo5.repository.entities.Feature;
import com.backend.grupo5.service.DTO.feature.FeatureCreateDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service @RequiredArgsConstructor
public class FeatureService implements IFeatureService {
    private final FeatureRepository repository;

    @Override
    public Feature create(FeatureCreateDTO input) {
        Feature feature = new Feature();
        feature.setName(input.getName());
        feature.setType( input.getType());
        return this.repository.save(feature);
    }

    @Override
    public Optional<Feature> getById(Long id) {
        return this.repository.findById(id);
    }

    @Override
    public ArrayList<Feature> getAll() {
        return (ArrayList<Feature>) this.repository.findAll();
    }

    @Override
    public void delete(Long id) {
        Optional<Feature> feature = this.getById(id);
        if(feature.isEmpty()) {
            throw new ApplicationError("not found", HttpStatus.NOT_FOUND);
        }
        this.repository.delete(feature.get());
    }

}
