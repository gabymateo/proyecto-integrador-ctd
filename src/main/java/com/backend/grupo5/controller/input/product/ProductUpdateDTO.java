package com.backend.grupo5.controller.input.product;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Data @JsonIgnoreProperties(ignoreUnknown = true) @Getter @Setter
public class ProductUpdateDTO {

    private String name;
    private Long categoryId;
    private Long cityId;
    private ArrayList<Long> imagesToDelete;
    private ArrayList<Long> featuresToDelete;
    private ArrayList<Long> features;
    private String price;
    private String address;
    private boolean availability;


}
