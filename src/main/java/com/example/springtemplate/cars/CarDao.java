package com.example.springtemplate.cars;

import com.example.springtemplate.songs.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CarDao {
    @Autowired
    CarRepository repository;
    @GetMapping("/api/cars")
    public List<Car> findAllRecords() {
        return (List<Car>) repository.findAll();
    }
    @GetMapping("/api/cars/{id}")
    public Car findRecordById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/cars/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
    @GetMapping("/api/cars/create")
    public void createRecord() {
        Car newRecord = new Car();

        newRecord.setTitle("New Record");

        repository.save(newRecord);
    }
    @PutMapping("/api/cars")
    public void updateRecord(
            @RequestBody Song newRecord
    ) {
        Car oldRecord = repository.findById(newRecord.getId()).get();

        oldRecord.setTitle(newRecord.getTitle());

        repository.save(oldRecord);
    }

}
