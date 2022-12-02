package com.backend.grupo5.repository;

import com.backend.grupo5.repository.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByProductId(Long productId);
    List<Booking> findByUserId(Long userId);
}