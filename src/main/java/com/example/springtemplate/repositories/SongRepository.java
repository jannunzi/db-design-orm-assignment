package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Song;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.criteria.CriteriaBuilder;

public interface SongRepository
        extends CrudRepository<Song, Integer> {
}
