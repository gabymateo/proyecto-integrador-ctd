package com.backend.grupo5.service.DTO.booking;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data @Getter @Setter
public class BookingCreateInput {

    private Long userId;
    private Long productId;
    private String startHour;
    private String startDate;
    private String endDate;
}
