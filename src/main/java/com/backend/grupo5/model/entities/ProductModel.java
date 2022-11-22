package com.backend.grupo5.model.entities;

import com.backend.grupo5.repository.entities.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.Optional;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductModel {

    private Long id;
    private String name;
    private String address;
    private String price;
    private Set<ImageModel> images;
    private boolean availability;
    private Category category;
    private Long categoryId;
    private City city;
    private Long cityId;
    private String description;
    private Set<Feature> features;
    private Set<Long> featureIds;
    private Set<Long> imageIds;
    private Set<Booking> bookings;

    public static ProductModel ProductEntityToProduct(Product input, Set<ImageModel> images, Optional<Boolean> fetchAttributes) {
        ProductModel product = new ProductModel();
        product.setId(input.getId());
        product.setName(input.getName());
        product.setAddress(input.getAddress());
        product.setAvailability(input.isAvailability());
        product.setCategoryId(input.getCategory().getId());
        product.setCityId(input.getCity().getId());
        product.setImages(images);
        product.setPrice(input.getPrice());
        product.setDescription(input.getDescription());
        if(fetchAttributes.isPresent() && fetchAttributes.get().equals(true)) {
            product.setFeatures(input.getFeatures());
            product.setCity(input.getCity());
            product.setCategory(input.getCategory());
            product.setBookings(input.getBookings());
        }
        return product;
    }
}


