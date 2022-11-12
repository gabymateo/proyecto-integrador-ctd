package com.backend.grupo5.repository;

import com.backend.grupo5.repository.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
