package com.backend.grupo5.service;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.mapper.CityDTOTOCity;
import com.backend.grupo5.model.entities.City;
import com.backend.grupo5.model.services.ICityService;
import com.backend.grupo5.repository.CityRepository;
import com.backend.grupo5.service.DTO.city.CityCreateDTO;
import com.backend.grupo5.service.DTO.city.CityUpdateDTO;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CityService implements ICityService {

    private final CityRepository cityRepository;
    private final CityDTOTOCity mapper;

    public CityService(CityRepository cityRepository, CityDTOTOCity mapper) {
        this.cityRepository = cityRepository;
        this.mapper = mapper;
    }


    @Override
    public City create(CityCreateDTO input) {
        City city = mapper.map(input);
        return this.cityRepository.save(city);
    }

    @Override
    public Optional<City> getById(Long id) {
        return this.cityRepository.findById(id);
    }

    @Override
    public City update(CityUpdateDTO input) {
        return null;
    }

    @Override
    public void delete(Long id) {
        Optional<City> city = this.cityRepository.findById(id);
        if(city.isEmpty()) {
            throw new ApplicationError("city not found", HttpStatus.NOT_FOUND);
        }
        this.cityRepository.delete(city.get());
    }
}
