package com.backend.grupo5.model.entities;

import com.backend.grupo5.repository.entities.Category;
import com.backend.grupo5.repository.entities.City;
import com.backend.grupo5.repository.entities.Image;
import com.backend.grupo5.repository.entities.Product;
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
    private Set<ImageModel> images;
    private boolean availability;
    private Category category;
    private City city;

    public static ProductModel create(Product input, Set<ImageModel> images) {
        ProductModel product = new ProductModel();
        product.setId(input.getId());
        product.setName(input.getName());
        product.setAddress(input.getAddress());
        product.setAvailability(input.isAvailability());
        product.setCity(input.getCity());
        product.setCategory(input.getCategory());
        product.setImages(images);
        return product;
    }
}


