package com.example.springtemplate.university.repositories;

import com.example.springtemplate.university.models.Course;
import org.springframework.data.repository.CrudRepository;

public interface CourseRepository
        extends CrudRepository<Course, Integer> {
}
