package com.backend.grupo5.repository;

import com.backend.grupo5.model.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

    @Query(
        "SELECT p from Product p where p.name like %?1% AND p.category = ?2 AND p.city = ?3 order by ?4"
    )
    public ArrayList<Product> search(String name, Long categoryId, Long cityId, String order);

}
