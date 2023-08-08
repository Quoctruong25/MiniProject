package com.example.truong.Repository;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.truong.binding.Product;

public interface ProductRepository extends JpaRepository<Product, Serializable> {

}
