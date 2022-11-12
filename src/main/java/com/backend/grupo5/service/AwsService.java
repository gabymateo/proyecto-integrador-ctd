package com.backend.grupo5.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.backend.grupo5.repository.entities.Image;
import com.backend.grupo5.model.services.IAwsService;
import com.backend.grupo5.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;

@Service
public class AwsService implements IAwsService {

    private final AmazonS3 amazonS3;

    @Value("${aws.s3.bucket}")
    private String bucketName;

    public AwsService(AmazonS3 amazonS3, ImageRepository imageRepository) {
        this.amazonS3 = amazonS3;
    }

    @Override
    public Image upload(MultipartFile file) {
        File fileToUpload = new File(file.getOriginalFilename());
        try(FileOutputStream stream = new FileOutputStream(fileToUpload)) {
            stream.write(file.getBytes());
            String newFileName = System.currentTimeMillis() + "-" + fileToUpload.getName();
            PutObjectRequest request = new PutObjectRequest(bucketName, newFileName, fileToUpload);
            amazonS3.putObject(request);
            return new Image(request.getBucketName(), request.getKey());
        }catch (IOException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public URL getById(String key) {
        return  amazonS3.getUrl(bucketName, key);
    }
}
