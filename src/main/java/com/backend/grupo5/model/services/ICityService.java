package com.backend.grupo5.model.services;

import com.backend.grupo5.repository.entities.City;
import com.backend.grupo5.service.DTO.city.CityCreateDTO;
import com.backend.grupo5.service.DTO.city.CityUpdateDTO;

import java.util.ArrayList;
import java.util.Optional;

public interface ICityService {
    City create(CityCreateDTO input);
    Optional<City> getById(Long id);
    ArrayList<City> getAll();
    City update(CityUpdateDTO input);
    void delete(Long id);
}
