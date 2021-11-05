package com.example.springtemplate.daos;

import com.example.springtemplate.models.Song;
import com.example.springtemplate.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        Song newRecord = new Song();

        newRecord.setTitle("New Song");

        repository.save(newRecord);
    }
    @PutMapping("/api/songs")
    public void updateRecord(
            @RequestBody Song newRecord
    ) {
        Song oldRecord = repository.findById(newRecord.getId()).get();

        oldRecord.setTitle(newRecord.getTitle());

        repository.save(oldRecord);
    }

}
