package com.backend.grupo5.repository.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;


@Entity @Table(name = "images") @Getter @Setter
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String bucketName;

    @Column
    private String name_key;

    @ManyToOne
    @JsonBackReference
    private Product product;

    @CreationTimestamp
    private Date createDate;

    @UpdateTimestamp
    private Date updateDate;

    public Image() {
    }
    public Image(String bucketName, String key) {
        this.bucketName = bucketName;
        this.name_key = key;
    }
}
