package com.backend.grupo5.service.DTO.product;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

@Data
@Getter
@Setter
public class ProductCreateDTO {

    private String name;
    private Long categoryId;
    private Long cityId;
    private String address;
    private String price;
    private String description;
    private boolean availability;
    private ArrayList<Long> featureIds;
    private MultipartFile[] files;

}
