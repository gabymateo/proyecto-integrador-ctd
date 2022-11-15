package com.backend.grupo5.security;

import com.backend.grupo5.repository.UserRepository;
import com.backend.grupo5.repository.entities.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

//@RequiredArgsConstructor @Service
//public class UserDetailsServiceImp implements UserDetailsService {
//
//    private final UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        User user = userRepository
//                .findByEmail(email)
//                .orElseThrow(() -> new UsernameNotFoundException("user with given email was not found"));
//
//        return new UserDetailsImp(user);
//    }
//}
