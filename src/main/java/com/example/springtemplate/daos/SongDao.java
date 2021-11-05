package com.example.springtemplate.daos;

import com.example.springtemplate.models.Song;
import com.example.springtemplate.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SongDao {
    @Autowired
    SongRepository repository;
    @GetMapping("/api/songs")
    public List<Song> findAll() {
        return (List<Song>) repository.findAll();
    }
    @GetMapping("/api/songs/{id}")
    public Song findById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/songs/{id}/remove")
    public void remove(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
}
