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
            Subquery<Long> subquery = query.subquery(Long.class);
            Root<Product> subRoot = subquery.from(Product.class);
            Join<Product, Booking> join = subRoot.join("bookings", JoinType.LEFT);
            subquery.where(cb.or(cb.between(join.get("startDate"), startDate, endDate), cb.between(join.get("endDate"), startDate, endDate)));
            subquery.select(subRoot.get("id"));
            predicates.add(cb.and(productRoot.get("id").in(subquery).not()));
        }
        if(cityId != null) {
            predicates.add(cb.and(cb.equal(productRoot.get("city").get("id"), cityId)));
        }
        query.where(predicates.toArray(new Predicate[predicates.size()]));
        query.select(productRoot);
//        query.distinct(true);

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
