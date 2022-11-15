package com.backend.grupo5.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;


import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

//public class TokenManagement {
//
//    private final static String ACCESS_TOKEN_SECRET = "8Zz5tw0Ionm3XPZZfN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb";
//    private final static Long ACCESS_TOKEN_VALIDITY_SECONDS = 2_592_000L;
//
//
//    public static String createToken(String name, String email) {
//        Long expirationTime = ACCESS_TOKEN_VALIDITY_SECONDS * 1000;
//        Date expirationDate = new Date(System.currentTimeMillis() * expirationTime);
//
//        Map<String, Object> extra = new HashMap<>();
//        extra.put("name", name);
//
//        return Jwts.builder()
//                .setSubject(email)
//                .setExpiration(expirationDate)
//                .addClaims(extra)
//                .signWith(Keys.hmacShaKeyFor(ACCESS_TOKEN_SECRET.getBytes()))
//                .compact();
//    }
//
//    public static UsernamePasswordAuthenticationToken getAuthentication(String token) {
//        try {
//            Claims claims = Jwts.parserBuilder()
//                    .setSigningKey(ACCESS_TOKEN_SECRET.getBytes())
//                    .build()
//                    .parseClaimsJws(token)
//                    .getBody();
//
//            String email = claims.getSubject();
//
//            return new UsernamePasswordAuthenticationToken(email, null, Collections.emptyList());
//        } catch (JwtException e) {
//            return null;
//        }
//    }
//}
