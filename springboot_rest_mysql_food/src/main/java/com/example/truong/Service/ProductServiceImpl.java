package com.example.truong.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.truong.Repository.ProductRepository;
import com.example.truong.binding.Product;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepo;

	@Override
	public String upsert(Product product) {
		productRepo.save(product); //upsert (insert / update based on PK)
		return "success";
	}

	@Override
	public Product getById(int id) {
		Optional<Product> findById = productRepo.findById(id);
		if(findById.isPresent()) {
			return findById.get();
		}
		return null;
	}

	@Override
	public List<Product> getAllProducts() {
		
		return productRepo.findAll();
	}

	@Override
	public String deletebById(int id) {
		if(productRepo.existsById(id)) {
			productRepo.deleteById(id);
			return "Delete success";
		}else{
			return "No Record Found";
		}
	}

}
