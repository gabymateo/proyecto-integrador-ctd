package com.backend.grupo5.common.helpers.mapper;

import com.backend.grupo5.repository.entities.City;
import com.backend.grupo5.service.DTO.city.CityCreateDTO;
import org.springframework.stereotype.Component;

@Component
public class CityDTOTOCity implements IMapper<CityCreateDTO, City>{
    @Override
    public City map(CityCreateDTO in) {
        City city = new City();
        city.setName(in.getName());
        city.setCountry(in.getCountry());
        city.setState(in.getState());
        return city;
    }
}
