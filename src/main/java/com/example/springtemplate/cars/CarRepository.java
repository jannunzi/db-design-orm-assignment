package com.example.springtemplate.cars;

import org.springframework.data.repository.CrudRepository;

public interface CarRepository
        extends CrudRepository<Car, Integer> {
}
