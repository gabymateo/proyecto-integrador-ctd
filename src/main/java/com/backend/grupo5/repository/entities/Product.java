package com.backend.grupo5.repository.entities;

import com.fasterxml.jackson.annotation.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


@Entity @Table(name = "products") @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) @Getter @Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String address;

    @Column
    private String description;

    @Column
    private String descriptionTitle;

    @Column
    private String price;

    @Column
    private Integer rate = 0;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<Image> images = new HashSet<>();

    @Column
    private boolean availability;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id")
    private City city;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "product_features", joinColumns = {@JoinColumn(name = "product_id")}, inverseJoinColumns = {@JoinColumn(name = "feature_id")})
    private Set<Feature> features = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "product", fetch = FetchType.LAZY)
    @JsonManagedReference
    private Set<Booking> bookings = new HashSet<>();

    @CreationTimestamp
    private Date createDate;

    @UpdateTimestamp
    private Date updateDate;

    public void setImages(Set<Image> images) {
        this.images = images;
        for (Image image : images) {
            image.setProduct(this);
        }
    }

    public void setBookings(Set<Booking> bookings) {
        this.bookings = bookings;
        for(Booking booking : bookings) {
            booking.setProduct(this);
        }
    }

}
