package com.backend.grupo5.common.config;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AwsConfig {

    @Value("${aws.access_key}")
    private String accessKey;
    @Value("${aws.secret_key}")
    private String privateKey;
    @Value("${aws.s3.region}")
    private String region;

    @Bean
    public AmazonS3 getClient() {
        BasicAWSCredentials credentials = new BasicAWSCredentials(accessKey, privateKey);
        return AmazonS3ClientBuilder.standard().withRegion(Regions.fromName(region)).withCredentials(new AWSStaticCredentialsProvider(credentials)).build();
    }
}
