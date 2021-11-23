package com.example.springtemplate.movies;

import org.springframework.data.repository.CrudRepository;

public interface MovieRepository2
        extends CrudRepository<Movie2, Integer> {
}
