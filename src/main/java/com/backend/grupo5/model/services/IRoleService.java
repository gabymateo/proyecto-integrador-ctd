package com.backend.grupo5.model.services;

import com.backend.grupo5.repository.entities.Role;

import java.util.ArrayList;
import java.util.Optional;

public interface IRoleService {
    Role create(Role role);
    Optional<Role> getByName(String name);
    ArrayList<Role> getAll();
}
