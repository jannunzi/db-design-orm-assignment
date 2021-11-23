package com.example.springtemplate.examples.m2m;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MovieDao {
    @Autowired
    MovieRepository repository;
    @GetMapping("/api/m2m/movies")
    public List<Movie> findAllRecords() {
        return (List<Movie>) repository.findAll();
    }

    @GetMapping("/api/m2m/movies/{id}")
    public Movie findRecordById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/m2m/movies/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
    @GetMapping("/api/m2m/movies/create")
    public void createRecord() {
        Movie newRecord = new Movie();

        newRecord.setName("New Name");

        repository.save(newRecord);
    }
    @PutMapping("/api/m2m/movies")
    public void updateRecord(
            @RequestBody Movie newRecord
    ) {
        Movie oldRecord = repository.findById(newRecord.getId()).get();

        oldRecord.setDirector(newRecord.getDirector());
        oldRecord.setTitle(newRecord.getTitle());
        oldRecord.setRating(newRecord.getRating());
        oldRecord.setName(newRecord.getName());

        repository.save(oldRecord);
    }
}
