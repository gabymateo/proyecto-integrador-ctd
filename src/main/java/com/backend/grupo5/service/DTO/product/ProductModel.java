package com.backend.grupo5.service.DTO.product;

import com.backend.grupo5.repository.entities.Category;
import com.backend.grupo5.repository.entities.City;
import com.backend.grupo5.repository.entities.Image;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Data
@Getter
@Setter
@JsonIgnoreProperties({"category.products, city.products"})
public class ProductModel {

    private String name;
    private String address;
    private String description;
    private Set<Image> images;
    private boolean availability;
    private Category category;
    private City city;

}
