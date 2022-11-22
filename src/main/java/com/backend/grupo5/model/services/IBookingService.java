package com.backend.grupo5.model.services;

import com.backend.grupo5.repository.entities.Booking;
import com.backend.grupo5.controller.input.booking.BookingCreateInput;

import java.util.List;
import java.util.Optional;

public interface IBookingService {
    Booking create(BookingCreateInput input);
    Optional<Booking> getById(Long id);

    List<Booking> getByProductId(Long productId);
    List<Booking> getAll();
    void delete(Long id);
}
