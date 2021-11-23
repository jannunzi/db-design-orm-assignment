package com.example.springtemplate.examples.m2m;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ActorDao {
    @Autowired
    ActorRepository actorRepository;

    @Autowired
    MovieRepository movieRepository;
    
    @GetMapping("/api/m2m/actors")
    public List<Actor> findAllRecords() {
        return (List<Actor>) actorRepository.findAll();
    }

    @GetMapping("/api/m2m/actors/{id}")
    public Actor findRecordById(
            @PathVariable("id") Integer id) {
        return actorRepository.findById(id).get();
    }
    @GetMapping("/api/m2m/actors/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        actorRepository.deleteById(id);
    }
    @GetMapping("/api/m2m/actors/create")
    public void createRecord() {
        Actor newRecord = new Actor();

        newRecord.setName("New Name");

        actorRepository.save(newRecord);
    }
    @GetMapping("/api/m2m/actors/{id}/movies/create")
    public void createOneToMany(
            @PathVariable("id") Integer id
    ) {
        Actor oneRecord = findRecordById(id);

        Movie newManyRecord = new Movie();
        newManyRecord.setName("New Movie");
        newManyRecord.setActor(oneRecord);

        oneRecord.getMovies().add(newManyRecord);
        
        actorRepository.save(oneRecord);
        movieRepository.save(newManyRecord);
    }
    @GetMapping("/api/m2m/actors/{id}/movies")
    public List<Movie> findOneToManyRecords(
            @PathVariable("id") Integer id) {
        return actorRepository.findById(id).get().getMovies();
    }
    @PutMapping("/api/m2m/actors")
    public void updateRecord(
            @RequestBody Actor newRecord
    ) {
        Actor oldRecord = actorRepository.findById(newRecord.getId()).get();

        oldRecord.setName(newRecord.getName());
        oldRecord.setFirstName(newRecord.getFirstName());
        oldRecord.setLastName(newRecord.getLastName());

        actorRepository.save(oldRecord);
    }
}
