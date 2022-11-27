package com.backend.grupo5.repository.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity @Table(name = "bookings") @Getter @Setter
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column
//    private String guestName;
//
//    @Column
//    private String guestLastName;
//
//    @Column
//    private String guestEmail;
//
//    @Column
//    private String guestCity;

    @Column
    private LocalTime startHour;

    @Column
    private LocalDate startDate;

    @Column
    private LocalDate endDate;

    @ManyToOne
    @JsonBackReference
    private Product product;

    @ManyToOne
    @JoinTable(name = "user_id")
    private User user;

}
