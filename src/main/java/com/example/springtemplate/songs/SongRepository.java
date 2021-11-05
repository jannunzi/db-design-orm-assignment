package com.example.springtemplate.songs;

import org.springframework.data.repository.CrudRepository;

public interface SongRepository
        extends CrudRepository<Song, Integer> {
}
