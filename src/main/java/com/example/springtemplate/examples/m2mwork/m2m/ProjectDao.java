package com.example.springtemplate.examples.m2mwork.m2m;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProjectDao {
    @Autowired
    ProjectRepository repository;
    @GetMapping("/api/m2m/projects")
    public List<Project> findAllRecords() {
        return (List<Project>) repository.findAll();
    }

    @GetMapping("/api/m2m/projects/{id}")
    public Project findRecordById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/m2m/projects/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
    @GetMapping("/api/m2m/projects/create")
    public void createRecord() {
        Project newRecord = new Project();

        newRecord.setName("New Name");

        repository.save(newRecord);
    }
    @PutMapping("/api/m2m/projects")
    public void updateRecord(
            @RequestBody Project newRecord
    ) {
        Project oldRecord = repository.findById(newRecord.getId()).get();

        oldRecord.setName(newRecord.getName());

        repository.save(oldRecord);
    }
}
