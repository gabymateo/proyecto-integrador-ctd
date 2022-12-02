package com.backend.grupo5.model.services;

import com.backend.grupo5.repository.entities.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URL;

public interface IAwsService {
    Image upload(MultipartFile file) throws IOException;
    URL getByKey(String key);
}
