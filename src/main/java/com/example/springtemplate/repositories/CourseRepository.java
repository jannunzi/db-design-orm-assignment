package com.example.springtemplate.repositories;

import org.springframework.data.repository.CrudRepository;

public interface CourseRepository
        extends CrudRepository<Course, Integer> {
}
