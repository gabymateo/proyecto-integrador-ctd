package com.backend.grupo5.service.DTO.city;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CityUpdateDTO {
    private String name;
    private String state;
    private String country;
}
