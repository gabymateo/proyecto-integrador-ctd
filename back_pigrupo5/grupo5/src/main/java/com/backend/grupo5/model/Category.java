package com.backend.grupo5.model;

import org.hibernate.annotations.SQLDelete;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "categories")
//@SQLDelete(sql = "UPDATE categories SET deleted = true WHERE id=?")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long id;

    @Column(unique = true, nullable = false)
    private String title;

    @Column
    private String description;

    @Column
    private String imageUrl;

    @Column
    private LocalDateTime createDate;

//    @Column(nullable = true)
//    private boolean deleted = Boolean.FALSE;



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setCreateDate(LocalDateTime date) {this.createDate = date;}


}



