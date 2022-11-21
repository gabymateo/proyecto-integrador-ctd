package com.backend.grupo5.service;

import com.backend.grupo5.model.services.IRoleService;
import com.backend.grupo5.repository.RoleRepository;
import com.backend.grupo5.repository.entities.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Service @Transactional @RequiredArgsConstructor
public class RoleService implements IRoleService {
    private final RoleRepository roleRepository;

    @Override
    public Role create(Role role) {
        return this.roleRepository.save(role);
    }

    @Override
    public Optional<Role> getByName(String name) {
        return this.roleRepository.findByName(name);
    }

    @Override
    public ArrayList<Role> getAll() {
        return (ArrayList<Role>) this.roleRepository.findAll();
    }
}
