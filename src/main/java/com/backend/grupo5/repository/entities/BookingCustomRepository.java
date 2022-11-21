package com.backend.grupo5.repository.entities;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor @Repository
public class BookingCustomRepository {

    private final EntityManager entityManager;

    public Booking search(Long productId, Date startDate, Date endDate, Time startHour, Time endHour) {

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Booking> query = cb.createQuery(Booking.class);
        Root<Booking> bookingRoot = query.from(Booking.class);
        List<Predicate> predicates = new ArrayList<>();

        if(productId != null) {
            predicates.add(cb.equal(bookingRoot.get("product").get("id"), productId));
        }
        if(startDate != null) {
            predicates.add(cb.equal(bookingRoot.get("startDate"), startDate));
        }
        if(endDate != null) {
            predicates.add(cb.equal(bookingRoot.get("endDate"), endDate));
        }
        if(startHour != null) {
            predicates.add(cb.equal(bookingRoot.get("startHour"), startDate));
        }
        if(endDate != null) {
            predicates.add(cb.equal(bookingRoot.get("endHour"), endDate));
        }
        if(startDate != null || endDate != null) {
            if(startDate != null && endDate != null) {

            }else {
            }
        }
        query.where(cb.and(predicates.toArray(new Predicate[predicates.size()]))).orderBy();
        return entityManager.createQuery(query).getSingleResult();
    }
}
