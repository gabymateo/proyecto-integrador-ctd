package com.backend.grupo5.controller.http;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.exceptions.ErrorHandler;
import com.backend.grupo5.common.exceptions.ResponseHandler;
import com.backend.grupo5.controller.input.LoginInput;
import com.backend.grupo5.model.services.IUserService;
import com.backend.grupo5.repository.entities.User;
import com.backend.grupo5.security.TokenManagement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController @RequiredArgsConstructor @RequestMapping("/auth")
public class UserController {
    private final IUserService userService;
    private final AuthenticationManager authenticationManager;
    @PostMapping("/signUp")
    public ResponseEntity<Object> create(@RequestBody User input) {
        try {
            User user = this.userService.create(input);
            return ResponseHandler.generateResponse(HttpStatus.CREATED, "success", user);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

//    @PostMapping("/login/")
//    public ResponseEntity<?> login(@RequestBody LoginUser loginUser)  {
//
//        final Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        loginUser.getEmail(),
//                        loginUser.getPassword()
//                )
//        );
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        final String token = TokenManagement.createToken(authentication);
//        User user = userService.getUserByUsername(loginUser.getUsername());
//        user.setToken(token);
//        return ResponseEntity.ok(user);
//    }
}
