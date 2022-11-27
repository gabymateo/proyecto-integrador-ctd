package com.backend.grupo5.controller.http;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.exceptions.ErrorHandler;
import com.backend.grupo5.common.exceptions.ResponseHandler;
import com.backend.grupo5.model.services.IBookingService;
import com.backend.grupo5.repository.entities.Booking;
import com.backend.grupo5.controller.input.booking.BookingCreateInput;
import com.backend.grupo5.security.TokenManagement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController @RequestMapping("/bookings") @RequiredArgsConstructor
public class BookingController {
    private final IBookingService bookingService;

    @PostMapping("/")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity<Object> create(@RequestBody BookingCreateInput input, @RequestHeader("Authorization") String jwt) {
        try {
            input.setUserId(TokenManagement.getUserId(jwt));
            Booking booking = this.bookingService.create(input);
            return ResponseHandler.generateResponse(HttpStatus.CREATED, "success", booking);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable Long id) {
        try {
            Optional<Booking> booking = this.bookingService.getById(id);
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", booking);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @GetMapping("/products/{productId}")
    public ResponseEntity<Object> getByProductId(@PathVariable Long productId) {
        try {
            List<Booking> bookings = this.bookingService.getByProductId(productId);
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", bookings);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAll() {
        try {
            List<Booking> bookings = this.bookingService.getAll();
            return ResponseHandler.generateResponse(HttpStatus.OK, "success", bookings);
        } catch (ApplicationError error) {
            return ErrorHandler.generateErrorResponse(error.getHttpStatus(), error.getMessage());
        }
    }
}
