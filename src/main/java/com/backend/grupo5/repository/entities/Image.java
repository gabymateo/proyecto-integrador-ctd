package com.backend.grupo5.repository.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;


@Entity
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String bucketName;

    @Column
    private String name_key;

    //test

    @Column
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonBackReference
    Product product;


    public Long getId() {
        return id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getBucketName() {
        return bucketName;
    }

    public void setBucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getKey() {
        return name_key;
    }

    public void setKey(String key) {
        this.name_key = key;
    }

    public Image() {
    }
    public Image(String bucketName, String key) {
        this.bucketName = bucketName;
        this.name_key = key;
    }

    public void setUrl(String url) {
        this.imageUrl = url;
    }

    public String getUrl() {
        return imageUrl;
    }
}
