package com.example.springtemplate.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MovieDao2 {
    @Autowired
    MovieRepository2 repository;
    @GetMapping("/api/movies")
    public List<Movie2> findAllRecords() {
        return (List<Movie2>) repository.findAll();
    }

    @GetMapping("/api/movies/{id}")
    public Movie2 findRecordById(
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
        Movie2 newRecord = new Movie2();

        newRecord.setTitle("New Record");

        repository.save(newRecord);
    }
    @PutMapping("/api/movies")
    public void updateRecord(
            @RequestBody Movie2 newRecord
    ) {
        Movie2 oldRecord = repository.findById(newRecord.getId()).get();

        oldRecord.setTitle(newRecord.getTitle());
        oldRecord.setDirector(newRecord.getDirector());

        repository.save(oldRecord);
    }

}
