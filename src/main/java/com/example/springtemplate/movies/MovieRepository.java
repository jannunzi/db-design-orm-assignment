package com.example.springtemplate.movies;

import com.example.springtemplate.cars.Car;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository
        extends CrudRepository<Movie, Integer> {
}
