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
    public List<Song> findAllRecords() {
        return (List<Song>) repository.findAll();
    }
    @GetMapping("/api/songs/{id}")
    public Song findRecordById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/songs/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
    @GetMapping("/api/songs/create")
    public void createRecord() {
        Song newSong = new Song();
        newSong.setTitle("New Song");
        repository.save(newSong);
    }

}
