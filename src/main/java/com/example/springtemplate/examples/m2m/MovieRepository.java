package com.example.springtemplate.examples.m2m;

import org.springframework.data.repository.CrudRepository;

public interface MovieRepository
        extends CrudRepository<Movie, Integer> {
}
