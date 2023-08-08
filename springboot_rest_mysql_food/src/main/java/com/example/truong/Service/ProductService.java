package com.example.truong.Service;

import java.util.List;

import com.example.truong.binding.Product;

public interface ProductService {
	
	public String upsert(Product product);
	
	public Product getById(int id);
	
	public List<Product> getAllProducts();
	
	public String deletebById(int id);
	
}
