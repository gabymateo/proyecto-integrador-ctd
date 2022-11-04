package com.backend.grupo5.service;

import com.backend.grupo5.common.helpers.mapper.ProductDTOTOProduct;
import com.backend.grupo5.model.entities.Category;
import com.backend.grupo5.model.entities.Product;
import com.backend.grupo5.model.services.IProductService;
import com.backend.grupo5.repository.CategoryRepository;
import com.backend.grupo5.repository.ProductRepository;
import com.backend.grupo5.service.DTO.product.ProductCreateDTO;
import com.backend.grupo5.service.DTO.product.ProductSearchDTO;
import com.backend.grupo5.service.DTO.product.ProductUpdateDTO;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ProductDTOTOProduct mapper;

    private final EntityManager entityManager;

    public ProductService(ProductRepository productRepository, CategoryRepository categoryRepository, ProductDTOTOProduct mapper, EntityManager entityManager) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.mapper = mapper;
        this.entityManager = entityManager;
    }


    @Override
    public Product create(ProductCreateDTO input) {
        Product product = mapper.map(input);
        //validate if category exists
        Optional<Category> category = this.categoryRepository.findById(input.getCategoryId());
        if(category.isEmpty()) {
            return null;
        }
        product.setCategory(category.get());
        return this.productRepository.save(product);
    }

    @Override
    public Optional<Product> getById(Long id) {
        Optional<Product> product = this.productRepository.findById(id);
        if(product.isEmpty()) {
            return null;
        }
        return product;
    }

    @Override
    public ArrayList<Product> search(String name) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Product> query = cb.createQuery(Product.class);
        Root<Product> productRoot = query.from(Product.class);
//        Predicate[] predicates = new Predicate[1];
        List<Predicate> predicates = new ArrayList<Predicate>();
        if(name != null) {
            predicates.add(cb.equal(productRoot.get("name"), name));
        }
        query.where(cb.and(predicates.toArray(new Predicate[predicates.size()])));
        return (ArrayList<Product>) entityManager.createQuery(query).getResultList();
    }

    @Override
    public Product update(Long id, ProductUpdateDTO input) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
