package com.example.springtemplate.music.repositories;

import com.example.springtemplate.music.models.Song;
import org.springframework.data.repository.CrudRepository;

public interface SongRepository
    extends CrudRepository<Song, Integer> {
}
