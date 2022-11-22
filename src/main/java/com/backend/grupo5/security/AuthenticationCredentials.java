package com.backend.grupo5.security;

import lombok.Data;

import java.util.Set;

@Data
public class AuthenticationCredentials {
    private String email;
    private String password;
}



