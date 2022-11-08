package com.backend.grupo5.repository;

import com.backend.grupo5.model.entities.Product;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.ArrayList;

@Repository
public class CategoryCustomRepository {

    @PersistenceContext
    private EntityManager entityManager;

//    public ArrayList<Product> getAllBy(String name) {
//        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
//        CriteriaQuery<Product> query = criteriaBuilder.createQuery(Product.class);
//        Root<Product> productRoot = query.from(Product.class);
//        query.select(productRoot.get(name));
//    }

}
