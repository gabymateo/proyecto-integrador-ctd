package com.backend.grupo5.model.entities;

import com.backend.grupo5.repository.entities.Image;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Data
@Getter
@Setter
public class ImageModel {

    private Long id;
    private String bucketName;
    private String name_key;
    private String url;
    private Date createDate;
    private Date updateDate;

    public static ImageModel create(Image input) {
        ImageModel image = new ImageModel();
        image.setId(input.getId());
        image.setName_key(input.getName_key());
        image.setBucketName(input.getBucketName());
        image.setCreateDate(input.getCreateDate());
        image.setUpdateDate(input.getUpdateDate());
        return image;
    }
}
