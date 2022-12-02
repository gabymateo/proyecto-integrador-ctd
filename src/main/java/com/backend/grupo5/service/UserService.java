package com.backend.grupo5.service;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.mapper.MapToUser;
import com.backend.grupo5.common.helpers.validators.UserValidator;
import com.backend.grupo5.controller.input.UserCreateInput;
import com.backend.grupo5.model.services.IUserService;
import com.backend.grupo5.repository.RoleRepository;
import com.backend.grupo5.repository.UserRepository;
import com.backend.grupo5.repository.entities.Role;
import com.backend.grupo5.repository.entities.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

@Service @Transactional @RequiredArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final MapToUser mapper;

    @Override
    public User create(UserCreateInput input) {
        UserValidator.validateCreate(input);

        Optional<User> existingUser = this.userRepository.findByEmail(input.getEmail());
        if(existingUser.isPresent()) {
            throw new ApplicationError("email is already taken", HttpStatus.BAD_REQUEST);
        }

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPass = passwordEncoder.encode(input.getPassword());

        User user = mapper.map(input);
        user.setPassword(encodedPass);
        Optional<Role> role = roleRepository.findById(2L);
        user.setRole(role.orElse(null));

        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUser(String email) {
        return this.userRepository.findByEmail(email);
    }

    @Override
    public Optional<User> getById(Long id) {
        return this.userRepository.findById(id);
    }
    
    @Override
    public ArrayList<User> getAll() {
        return (ArrayList<User>) this.userRepository.findAll();
    }

}
