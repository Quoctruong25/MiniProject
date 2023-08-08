package com.example.truong.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.truong.Service.ProductService;
import com.example.truong.binding.Product;

@RestController
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping("/product")
	public ResponseEntity<String> createProduct(@RequestBody Product product){
		String status = productService.upsert(product);
		return new ResponseEntity<>(status, HttpStatus.CREATED);
	}
	
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> getProduct(@PathVariable int id){
		Product product = productService.getById(id);
		return new ResponseEntity<>(product, HttpStatus.OK); 
	}
	
	@GetMapping("/products")
	public ResponseEntity<List<Product>> getAllProducts(){
		List<Product> allProducts = productService.getAllProducts();
		return new ResponseEntity<>(allProducts, HttpStatus.OK); 
	}
	
	@PutMapping("/product/{id}")
	public ResponseEntity<String> updateProduct(@RequestBody Product product){
		String status = productService.upsert(product);
		return new ResponseEntity<>(status, HttpStatus.OK);
	}
	
	@DeleteMapping("/product/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable int id){
		String status = productService.deletebById(id);
		return new ResponseEntity<>(status, HttpStatus.OK); 
	}
	
}
