package com.backend.grupo5.service.DTO.product;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ProductCreateDTO {

    private String name;
    private Long categoryId;
    private Long cityId;
    private MultipartFile[] files;

    public String getName() {
        return name;
    }
    public Long getCategoryId() {
        return categoryId;
    }
    public Long getCityId() {
        return cityId;
    }
    public MultipartFile[] getFiles() {
        return files;
    }
}
