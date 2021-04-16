package com.example.springtemplate.music.repositories;

import com.example.springtemplate.music.models.Playlist;
import org.springframework.data.repository.CrudRepository;

public interface PlaylistRepository
    extends CrudRepository<Playlist, Integer> {
}
