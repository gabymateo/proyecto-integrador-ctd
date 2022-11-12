package com.backend.grupo5.service.DTO.product;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor
@NoArgsConstructor
public class ProductSearchInput {

    private String name;
    private Long cityId;
    private Long categoryId;
    private String order;
}
