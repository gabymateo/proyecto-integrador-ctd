package com.backend.grupo5.service;

import com.backend.grupo5.model.services.IUserService;
import com.backend.grupo5.repository.UserRepository;
import com.backend.grupo5.repository.entities.User;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Service @Transactional
public class UserService implements IUserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public User create(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUser(String email) {
        return this.userRepository.findByEmail(email);
    }

    @Override
    public ArrayList<User> getAll() {
        return (ArrayList<User>) this.userRepository.findAll();
    }

}
