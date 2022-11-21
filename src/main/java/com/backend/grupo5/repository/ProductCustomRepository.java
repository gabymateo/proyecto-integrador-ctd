package com.backend.grupo5.repository;

import com.backend.grupo5.repository.entities.Booking;
import com.backend.grupo5.repository.entities.Product;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductCustomRepository {

    private final EntityManager entityManager;

    public ProductCustomRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

//    public ArrayList<Product> search(
//            String name,
//            Long categoryId,
//            Long cityId,
//            String order,
//            LocalDate startDate,
//            LocalDate endDate
//    ) {
//        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
//        CriteriaQuery<Product> query = cb.createQuery(Product.class);
//        Root<Product> productRoot = query.from(Product.class);
//        List<Predicate> predicates = new ArrayList<Predicate>();
//        if(name != null) {
//            predicates.add(cb.like(productRoot.<String>get("name"), "%"+name+"%"));
//        }
//        if(categoryId != null) {
//            predicates.add(cb.equal(productRoot.get("category").get("id"), categoryId));
//        }
//        if(cityId != null) {
//            predicates.add(cb.equal(productRoot.get("city").get("id"), cityId));
//        }
//        //@Query(value = "select * from product left join booking on product.id = booking.product_id where" +
//        //            "((booking.checkin not between ?1 and ?2) " +
//        //            "or (booking.checkin is null)) and ((booking.checkout not between ?1 and ?2) " +
//        //            "or (booking.checkout is null)) group by product.id", nativeQuery = true)
//        if(startDate != null) {
//            if(endDate != null) {
//                predicates.add(cb.lessThan(productRoot.get("bookings").get("startDate"), startDate));
//                predicates.add(cb.lessThan(productRoot.get("bookings").get("endDate"), startDate));
//                predicates.add(cb.greaterThan(productRoot.get("bookings").get("endDate"), endDate));
//                predicates.add(cb.greaterThan(productRoot.get("bookings").get("startDate"), endDate));
//            }else {
//                predicates.add(cb.lessThan(productRoot.get("bookings").get("startDate"), startDate));
//            }
//        }
//        query.where(cb.and(predicates.toArray(new Predicate[predicates.size()]))).orderBy();
//        if(order != null) {
//            String parsedOrder = order.toLowerCase();
//            query.orderBy(parsedOrder.equals("desc") ? cb.desc(productRoot.get("id")) : cb.asc(productRoot.get("id")));
//        }
//        return (ArrayList<Product>) entityManager.createQuery(query).getResultList();
//    }

    public Page<Product> search(
            String name,
            Long categoryId,
            Long cityId,
            String order,
            String sort,
            LocalDate startDate,
            LocalDate endDate,
            Long productId,
            Pageable pageable
    ) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Product> query = cb.createQuery(Product.class);
        Root<Product> productRoot = query.from(Product.class);
        List<Predicate> predicates = new ArrayList<Predicate>();

        if(name != null) {
            predicates.add(cb.and(cb.like(productRoot.get("name"), "%"+name+"%")));
        }
        if(productId != null) {
            predicates.add(cb.and(cb.equal(productRoot.get("id"), productId)));
        }
        if(categoryId != null) {
            predicates.add(cb.and(cb.equal(productRoot.get("category").get("id"), categoryId)));
        }

        if(startDate != null && endDate != null) {
            Join<Product, Booking> join = productRoot.join("bookings", JoinType.LEFT);
            Predicate start = cb.between(join.get("startDate"), startDate, endDate).not();
            Predicate end = cb.between(join.get("endDate"), startDate, endDate).not();
            Predicate isNull = cb.or(cb.isNull(join.get("startDate")), cb.isNull(join.get("endDate")));
            predicates.add(cb.or(cb.or(start, end), isNull));
        }
        if(cityId != null) {
            predicates.add(cb.and(cb.equal(productRoot.get("city").get("id"), cityId)));
        }
        query.where(predicates.toArray(new Predicate[predicates.size()]));
        query.distinct(true);

        if(order != null) {
            String parsedOrder = order.toLowerCase();
            query.orderBy(parsedOrder.equals("desc") ? cb.desc(productRoot.get(sort)) : cb.asc(productRoot.get(sort)));
        }
        //fetch products per page limit
        List<Product> products = entityManager.createQuery(query).setFirstResult((int) pageable.getOffset()).setMaxResults(pageable.getPageSize()).getResultList();
        //create count
//        CriteriaQuery<Long> count = cb.createQuery(Long.class);
//        Root<Product> productRootCount = count.from(Product.class);
//        count.select(cb.count(productRootCount)).where(cb.and(predicates.toArray(new Predicate[predicates.size()])));
//        Long countProducts = entityManager.createQuery(count).getSingleResult();

        return new PageImpl<>(products, pageable, 0);
    }

}
