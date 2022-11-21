package com.backend.grupo5.model.services;

import com.backend.grupo5.repository.entities.User;

import java.util.ArrayList;
import java.util.Optional;

public interface IUserService {
    User create(User user);
    Optional<User> getUser(String email);
    Optional<User> getById(Long id);
    ArrayList<User> getAll();

}
