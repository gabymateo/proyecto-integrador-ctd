package com.backend.grupo5.repository.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity @Table(name = "users") @Getter @Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String lastName;

    @Column
    private String email;

    @Column
    private String password;

    @ManyToOne()
    @JoinColumn(name = "role_id")
    private Role role;

}
