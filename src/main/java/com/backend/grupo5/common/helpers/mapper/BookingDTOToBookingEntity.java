package com.backend.grupo5.common.helpers.mapper;

import com.backend.grupo5.repository.entities.Booking;
import com.backend.grupo5.controller.input.booking.BookingCreateInput;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;

@Component
public class BookingDTOToBookingEntity implements IMapper<BookingCreateInput, Booking>{

    @Override
    public Booking map(BookingCreateInput in) {
        Booking booking = new Booking();
        booking.setStartDate(LocalDate.parse(in.getStartDate()));
        booking.setEndDate(LocalDate.parse(in.getEndDate()));
        booking.setStartHour(LocalTime.parse(in.getStartHour()));
        return booking;
    }
}
