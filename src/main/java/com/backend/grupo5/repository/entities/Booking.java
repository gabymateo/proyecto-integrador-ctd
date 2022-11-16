package com.backend.grupo5.repository.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity @Table(name = "bookings") @Getter @Setter
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;




}
