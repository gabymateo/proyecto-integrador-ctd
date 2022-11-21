package com.backend.grupo5.repository.entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity @Table(name = "categories") @Getter @Setter
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long id;

    @Column(nullable = false)
    private String title;

    @Column
    private String description;

    @Column
    private String url;
    @CreationTimestamp
    private Date createDate;

    @UpdateTimestamp
    private Date updateDate;
}



