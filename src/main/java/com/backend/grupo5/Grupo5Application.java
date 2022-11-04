package com.backend.grupo5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class Grupo5Application {
	public static void main(String[] args) {
		SpringApplication.run(Grupo5Application.class, args);
	}

}
