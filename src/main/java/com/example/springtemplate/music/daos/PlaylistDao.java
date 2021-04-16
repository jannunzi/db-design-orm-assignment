package com.example.springtemplate.music.daos;

import com.example.springtemplate.music.models.Playlist;
import com.example.springtemplate.music.repositories.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PlaylistDao {
    @Autowired
    PlaylistRepository repository;
    public Playlist createPlaylist(Playlist playlist) {
        return null;
    }
    @GetMapping("/api/playlists")
    public List<Playlist> findAllPlaylists() {
        return (List<Playlist>) repository.findAll();
    }
    @GetMapping("/api/playlists/{pid}")
    public Playlist findPlaylistById(
            @PathVariable("pid") Integer id) {
        return repository.findById(id).get();
    }
    public Playlist updatePlaylist(Integer id, Playlist newPlaylist) {
        return null;
    }

    @GetMapping("/api/plalists/{pid}/delete")
    public Integer deletePlaylist(
            @PathVariable("pid") Integer id) {
        repository.deleteById(id);
        return 1;
    }
}
