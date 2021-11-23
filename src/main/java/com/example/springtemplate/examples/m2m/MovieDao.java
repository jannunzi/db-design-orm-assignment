package com.example.springtemplate.examples.m2m;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MovieDao {
    @Autowired
    ActorRepository actorRepository;

    @Autowired
    MovieRepository movieRepository;
    @GetMapping("/api/m2m/movies")
    public List<Movie> findAllRecords() {
        return (List<Movie>) movieRepository.findAll();
    }

    @GetMapping("/api/m2m/movies/{id}")
    public Movie findRecordById(
            @PathVariable("id") Integer id) {
        return movieRepository.findById(id).get();
    }
    @GetMapping("/api/m2m/movies/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        movieRepository.deleteById(id);
    }
    @GetMapping("/api/m2m/movies/create")
    public void createRecord() {
        Movie newRecord = new Movie();

        newRecord.setName("New Name");

        movieRepository.save(newRecord);
    }
    @PutMapping("/api/m2m/movies")
    public void updateRecord(
            @RequestBody Movie newRecord
    ) {
        Movie oldRecord = movieRepository.findById(newRecord.getId()).get();

        oldRecord.setDirector(newRecord.getDirector());
        oldRecord.setTitle(newRecord.getTitle());
        oldRecord.setRating(newRecord.getRating());
        oldRecord.setName(newRecord.getName());

        movieRepository.save(oldRecord);
    }

    @GetMapping("/api/m2m/movies/{id}/actors/create")
    public void createOneToMany(
            @PathVariable("id") Integer id
    ) {
        Movie oneRecord = findRecordById(id);

        Actor newManyRecord = new Actor();
        newManyRecord.setName("New Actor");
        newManyRecord.setMovie(oneRecord);

        oneRecord.getActors().add(newManyRecord);

        actorRepository.save(newManyRecord);
        movieRepository.save(oneRecord);
    }
    @GetMapping("/api/m2m/movies/{id}/actors")
    public List<Actor> findOneToManyRecords(
            @PathVariable("id") Integer id) {
        return movieRepository.findById(id).get().getActors();
    }

}
