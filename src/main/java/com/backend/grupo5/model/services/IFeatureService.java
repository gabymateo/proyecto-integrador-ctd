package com.backend.grupo5.model.services;

import com.backend.grupo5.repository.entities.Feature;
import com.backend.grupo5.service.DTO.feature.FeatureCreateDTO;

import java.util.ArrayList;
import java.util.Optional;

public interface IFeatureService {
    Feature create(FeatureCreateDTO input);
    Optional<Feature> getById(Long id);
    ArrayList<Feature> getAll();
    void delete(Long id);
}
