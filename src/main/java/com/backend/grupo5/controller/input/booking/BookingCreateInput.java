package com.backend.grupo5.controller.input.booking;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data @Getter @Setter
public class BookingCreateInput {
    private Long userId;
    private Long productId;
    private String guestName;
    private String guestLastName;
    private String guestEmail;
    private String guestCity;
    private String startHour;
    private String startDate;
    private String endDate;
}
