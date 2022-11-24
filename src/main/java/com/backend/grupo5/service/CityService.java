package com.backend.grupo5.service;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.error_description.CityErrorDescription;
import com.backend.grupo5.common.helpers.mapper.CityDTOTOCity;
import com.backend.grupo5.common.helpers.validators.CityValidator;
import com.backend.grupo5.repository.entities.City;
import com.backend.grupo5.model.services.ICityService;
import com.backend.grupo5.repository.CityRepository;
import com.backend.grupo5.controller.input.city.CityCreateDTO;
import com.backend.grupo5.controller.input.city.CityUpdateDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service @RequiredArgsConstructor
public class CityService implements ICityService {

    private final CityRepository cityRepository;
    private final CityDTOTOCity mapper;

    @Override
    public City create(CityCreateDTO input) {
        CityValidator.validateCreate(input);
        City city = mapper.map(input);
        return this.cityRepository.save(city);
    }

    @Override
    public Optional<City> getById(Long id) {
        Optional<City> city = this.cityRepository.findById(id);
        if (city.isEmpty()) {
            throw new ApplicationError(CityErrorDescription.CITY_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }
        return city;
    }

    @Override
    public ArrayList<City> getAll() {
        return (ArrayList<City>) this.cityRepository.findAll();
    }

    @Override
    public City update(CityUpdateDTO input) {
        return null;
    }

    @Override
    public void delete(Long id) {
        Optional<City> city = this.cityRepository.findById(id);
        if(city.isEmpty()) {
            throw new ApplicationError(CityErrorDescription.CITY_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }
        this.cityRepository.delete(city.get());
    }
}