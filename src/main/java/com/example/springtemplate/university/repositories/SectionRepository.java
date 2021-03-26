package com.example.springtemplate.university.repositories;

import com.example.springtemplate.university.models.Section;
import org.springframework.data.repository.CrudRepository;

public interface SectionRepository
        extends CrudRepository<Section, Integer> {
}
