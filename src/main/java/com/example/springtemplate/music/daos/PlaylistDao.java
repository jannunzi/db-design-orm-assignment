package com.example.springtemplate.music.daos;

import com.example.springtemplate.music.models.Playlist;
import com.example.springtemplate.music.repositories.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
    public Playlist findPlaylistById(Integer id) {
        return null;
    }
    public Playlist updatePlaylist(Integer id, Playlist newPlaylist) {
        return null;
    }
    public void deletePlaylist(Integer id) {

    }
}
