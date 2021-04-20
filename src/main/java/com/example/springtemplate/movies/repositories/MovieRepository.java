package com.example.springtemplate.movies.repositories;

import com.example.springtemplate.movies.models.Movie;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository
    extends CrudRepository<Movie, Integer> {
}
