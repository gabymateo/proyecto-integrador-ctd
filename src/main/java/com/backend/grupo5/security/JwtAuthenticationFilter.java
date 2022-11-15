package com.backend.grupo5.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

//public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
//
//    @Override
//    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
//
//        AuthenticationCredentials credentials = new AuthenticationCredentials();
//        try {
//            credentials = new ObjectMapper().readValue(request.getReader(), AuthenticationCredentials.class);
//        } catch (IOException e) {
//        }
//
//        UsernamePasswordAuthenticationToken userNamePat = new UsernamePasswordAuthenticationToken(
//                credentials.getEmail(),
//                credentials.getPassword(),
//                Collections.emptyList()
//        );
//
////        return super.attemptAuthentication(request, response);
//        return getAuthenticationManager().authenticate(userNamePat);
//    }
//
//    @Override
//    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
//
//        UserDetailsImp userDetailsImp = (UserDetailsImp) authResult.getPrincipal();
//        String token = TokenManagement.createToken(userDetailsImp.getUsername(), userDetailsImp.getPassword());
//
//        response.addHeader("Authorization", "Bearer" + token);
//        response.getWriter().flush();
//
//        super.successfulAuthentication(request, response, chain, authResult);
//    }
//}
