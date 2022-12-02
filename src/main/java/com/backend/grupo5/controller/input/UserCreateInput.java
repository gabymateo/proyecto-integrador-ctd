package com.backend.grupo5.controller.input;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data @Getter @Setter
public class UserCreateInput {

    private String email;
    private String password;
    private String name;
    private String lastName;
}
