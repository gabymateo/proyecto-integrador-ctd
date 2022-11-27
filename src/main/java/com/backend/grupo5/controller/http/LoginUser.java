package com.backend.grupo5.controller.http;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @Data
public class LoginUser {

    private String email;
    private String password;
}
