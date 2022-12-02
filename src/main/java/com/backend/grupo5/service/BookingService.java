package com.backend.grupo5.service;

import com.backend.grupo5.common.exceptions.ApplicationError;
import com.backend.grupo5.common.helpers.error_description.BookingErrorDescription;
import com.backend.grupo5.common.helpers.error_description.ProductErrorDescription;
import com.backend.grupo5.common.helpers.mapper.BookingDTOToBookingEntity;
import com.backend.grupo5.model.entities.ProductModel;
import com.backend.grupo5.model.services.IBookingService;
import com.backend.grupo5.model.services.IProductService;
import com.backend.grupo5.model.services.IUserService;
import com.backend.grupo5.repository.BookingRepository;
import com.backend.grupo5.repository.ProductRepository;
import com.backend.grupo5.repository.entities.Booking;
import com.backend.grupo5.repository.entities.Product;
import com.backend.grupo5.repository.entities.User;
import com.backend.grupo5.controller.input.booking.BookingCreateInput;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@RequiredArgsConstructor @Service
public class BookingService implements IBookingService {

    private final BookingRepository bookingRepository;
    private final IUserService userService;
    private final IProductService productService;
    private final BookingDTOToBookingEntity mapper;
    private final ProductRepository productRepository;


    @Override
    public Booking create(BookingCreateInput input) {
        //validate if user exits
        Optional<User> user = this.userService.getById(input.getUserId());
        if(user.isEmpty()) {
            throw new ApplicationError(BookingErrorDescription.USER_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }
        //validate if product exists
        Optional<Product> product = this.productRepository.findById(input.getProductId());
        if(product.isEmpty()) {
            throw new ApplicationError(ProductErrorDescription.PRODUCT_NOT_FOUND.getDescription(), HttpStatus.NOT_FOUND);
        }
        //validate if dates are available
        Page<ProductModel> available = this.productService.search(null, null, null, null, null, LocalDate.parse(input.getStartDate()), LocalDate.parse(input.getEndDate()), product.get().getId(), PageRequest.of(0, 5));
        if(available.getContent().size() == 0) {
            throw new ApplicationError(ProductErrorDescription.PRODUCT_NOT_AVAILABLE.getDescription(), HttpStatus.BAD_REQUEST);
        }
        Booking booking = mapper.map(input);
        booking.setUser(user.get());
        booking.setProduct(product.get());
        System.out.println(booking);
        return this.bookingRepository.save(booking);
    }

    @Override
    public Optional<Booking> getById(Long id) {
        Optional<Booking> booking = this.bookingRepository.findById(id);
        if(booking.isEmpty()) {
            throw new ApplicationError("booking with given id was not found", HttpStatus.NOT_FOUND);
        }
        return booking;
    }

    @Override
    public List<Booking> getAll() {
        return this.bookingRepository.findAll();
    }

    @Override
    public List<Booking> getByProductId(Long productId) {
        return this.bookingRepository.findByProductId(productId);
    }

    @Override
    public List<Booking> getByUserId(Long userId) {
        return this.bookingRepository.findByUserId(userId);
    }

    @Override
    public void delete(Long id) {
        Optional<Booking> booking = this.bookingRepository.findById(id);
        if(booking.isEmpty()) {
            throw new ApplicationError("booking with given id was not found", HttpStatus.NOT_FOUND);
        }
        this.bookingRepository.delete(booking.get());
    }
}