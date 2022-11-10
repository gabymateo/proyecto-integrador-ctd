package com.backend.grupo5.model.entities;

import com.backend.grupo5.repository.entities.Category;
import com.backend.grupo5.repository.entities.City;
import com.backend.grupo5.repository.entities.Image;
import lombok.*;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductModel {

    private Long id;
    private String name;
    private String address;
    private Set<Image> images;
    private boolean availability;
    private Category category;
    private City city;

}


