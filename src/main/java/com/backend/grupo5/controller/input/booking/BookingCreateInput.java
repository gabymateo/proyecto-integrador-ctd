package com.backend.grupo5.controller.input.booking;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data @Getter @Setter
public class BookingCreateInput {
    private Long userId;
    private Long productId;
    private String startHour;
    private String startDate;
    private String endDate;
}
