package com.backend.grupo5.common.helpers.mapper;

import com.backend.grupo5.controller.input.UserCreateInput;
import com.backend.grupo5.repository.entities.User;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class MapToUser implements IMapper<UserCreateInput, User> {
    @Override
    public User map(UserCreateInput in) {
        User user = new User();
        user.setEmail(in.getEmail());
        user.setName(in.getName());
        user.setLastName(in.getLastName());
        return user;
    }
}
