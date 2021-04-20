package com.example.springtemplate.movies.repositories;

import com.example.springtemplate.movies.models.Theater;
import org.springframework.data.repository.CrudRepository;

public interface TheaterRepository
    extends CrudRepository<Theater, Integer> {
}
