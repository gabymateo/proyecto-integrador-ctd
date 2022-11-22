package com.backend.grupo5.controller.input.city;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data @Setter @Getter
public class CityCreateDTO {
    private String name;
    private String state;
    private String country;
}
