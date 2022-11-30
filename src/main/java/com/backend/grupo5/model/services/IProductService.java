package com.backend.grupo5.model.services;

import com.backend.grupo5.model.entities.ProductModel;
import com.backend.grupo5.repository.entities.Product;
import com.backend.grupo5.controller.input.product.ProductCreateDTO;
import com.backend.grupo5.controller.input.product.ProductUpdateDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Optional;

public interface IProductService {
    ProductModel create(ProductCreateDTO input, MultipartFile[] files) throws IOException;
    Optional<ProductModel> getById(Long id);
    Page<ProductModel> search(String name, Long categoryId, Long cityId, String order, String sort, LocalDate startDate, LocalDate endDate, Long productId, Pageable pageable);
    Product update(Long id, ProductUpdateDTO input, MultipartFile[] files) throws IOException;
    void delete(Long id);
}
