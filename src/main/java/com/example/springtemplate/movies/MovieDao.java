package com.example.springtemplate.movies;

import com.example.springtemplate.songs.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MovieDao {
    @Autowired
    MovieRepository repository;
    @GetMapping("/api/movies")
    public List<Movie> findAllRecords() {
        return (List<Movie>) repository.findAll();
    }

    @GetMapping("/api/movies/{id}")
    public Movie findRecordById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/movies/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
    @GetMapping("/api/movies/create")
    public void createRecord() {
        Movie newRecord = new Movie();

        newRecord.setTitle("New Record");

        repository.save(newRecord);
    }
    @PutMapping("/api/movies")
    public void updateRecord(
            @RequestBody Movie newRecord
    ) {
        Movie oldRecord = repository.findById(newRecord.getId()).get();

        oldRecord.setTitle(newRecord.getTitle());
        oldRecord.setDirector(newRecord.getDirector());

        repository.save(oldRecord);
    }

}
