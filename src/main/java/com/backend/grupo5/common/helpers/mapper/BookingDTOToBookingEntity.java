package com.backend.grupo5.common.helpers.mapper;

import com.backend.grupo5.repository.entities.Booking;
import com.backend.grupo5.service.DTO.booking.BookingCreateInput;
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
        booking.setGuestCity(in.getGuestCity());
        booking.setGuestLastName(in.getGuestLastName());
        booking.setGuestEmail(in.getGuestEmail());
        booking.setGuestName(in.getGuestName());
        return booking;
    }
}
