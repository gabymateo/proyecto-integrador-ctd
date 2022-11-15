package com.backend.grupo5.service;

import com.backend.grupo5.common.helpers.enums.FeatureType;
import com.backend.grupo5.repository.FeatureRepository;
import com.backend.grupo5.repository.entities.Feature;
import com.backend.grupo5.service.DTO.feature.FeatureCreateDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class FeatureService {

    private final FeatureRepository repository;

    public FeatureService(FeatureRepository repository) {
        this.repository = repository;
    }


    public Feature create(FeatureCreateDTO input) {
        Feature feature = new Feature();
        feature.setName(input.getName());
        feature.setType( input.getType());
        return this.repository.save(feature);
    }

    public Optional<Feature> getById(Long id) {
        return this.repository.findById(id);
    }

    public ArrayList<Feature> getAll() {
        return (ArrayList<Feature>) this.repository.findAll();
    }


}
