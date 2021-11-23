package com.example.springtemplate.examples.m2mwork.m2m;

import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository
        extends CrudRepository<Project, Integer> {
}
