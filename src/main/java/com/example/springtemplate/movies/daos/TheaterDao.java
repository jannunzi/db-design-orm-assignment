package com.example.springtemplate.movies.daos;

import com.example.springtemplate.movies.models.Theater;
import com.example.springtemplate.movies.repositories.TheaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TheaterDao {
    @Autowired
    TheaterRepository repository;

    public Theater createTheater(Theater theater) {
        return null;
    }
    @GetMapping("/api/theaters")
    public List<Theater> findAllTheaters() {
        return (List<Theater>) repository.findAll();
    }
    @GetMapping("/api/theaters/{tid}")
    public Theater findTheaterById(
            @PathVariable("tid") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/theaters/{tid}/name/{name}")
    public Theater updateTheaterName(
            @PathVariable("tid") Integer id,
            @PathVariable("name") String newTheaterName) {
        Theater theater = repository.findById(id).get();
        theater.setName(newTheaterName);
        return repository.save(theater);
    }
    public Integer updateTheater(
            @PathVariable("tid") Integer id,
            Theater newTheater) {
        return null;
    }
    public Integer deleteTheater(Integer id) {
        return null;
    }
}
