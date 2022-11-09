package com.backend.grupo5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

//exclude = {SecurityAutoConfiguration.class}
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class Grupo5Application extends SpringBootServletInitializer {
	public static void main(String[] args) {

		SpringApplication.run(Grupo5Application.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(Grupo5Application.class);
	}
}
