package com.backend.grupo5.repository;

import com.backend.grupo5.repository.entities.Product;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductCustomRepository {

    private final EntityManager entityManager;

    public ProductCustomRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public ArrayList<Product> search(
            String name,
            Long categoryId,
            Long cityId,
            String order
    ) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Product> query = cb.createQuery(Product.class);
        Root<Product> productRoot = query.from(Product.class);
        List<Predicate> predicates = new ArrayList<Predicate>();
        if(name != null) {
            predicates.add(cb.like(productRoot.<String>get("name"), "%"+name+"%"));
        }
        if(categoryId != null) {
            predicates.add(cb.equal(productRoot.get("category").get("id"), categoryId));
        }
        if(cityId != null) {
            predicates.add(cb.equal(productRoot.get("city").get("id"), cityId));
        }
        query.where(cb.and(predicates.toArray(new Predicate[predicates.size()]))).orderBy();
        if(order != null) {
            String parsedOrder = order.toLowerCase();
            query.orderBy(parsedOrder.equals("desc") ? cb.desc(productRoot.get("id")) : cb.asc(productRoot.get("id")));
        }
        return (ArrayList<Product>) entityManager.createQuery(query).getResultList();
    }

    public Page<Product> test(
            String name,
            Long categoryId,
            Long cityId,
            String order,
            String sort,
            Pageable pageable
    ) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Product> query = cb.createQuery(Product.class);
        Root<Product> productRoot = query.from(Product.class);
        List<Predicate> predicates = new ArrayList<Predicate>();
        if(name != null) {
            predicates.add(cb.like(productRoot.<String>get("name"), "%"+name+"%"));
        }
        if(categoryId != null) {
            predicates.add(cb.equal(productRoot.get("category").get("id"), categoryId));
        }
        if(cityId != null) {
            predicates.add(cb.equal(productRoot.get("city").get("id"), cityId));
        }
        query.where(cb.and(predicates.toArray(new Predicate[predicates.size()])));

        if(order != null) {
            String parsedOrder = order.toLowerCase();
            query.orderBy(parsedOrder.equals("desc") ? cb.desc(productRoot.get(sort)) : cb.asc(productRoot.get(sort)));
        }
        //fetch products per page limit
        List<Product> products = entityManager.createQuery(query).setFirstResult((int) pageable.getOffset()).setMaxResults(pageable.getPageSize()).getResultList();
        //create count
        CriteriaQuery<Long> count = cb.createQuery(Long.class);
        Root<Product> productRootCount = count.from(Product.class);
        count.select(cb.count(productRootCount)).where(cb.and(predicates.toArray(new Predicate[predicates.size()])));
        Long countProducts = entityManager.createQuery(count).getSingleResult();

        return new PageImpl<>(products, pageable, countProducts);
    }

}
