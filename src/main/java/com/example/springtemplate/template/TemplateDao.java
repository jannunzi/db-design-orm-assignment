package com.example.springtemplate.template;

import com.example.springtemplate.songs.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TemplateDao {
    @Autowired
    TemplateRepository repository;
    @GetMapping("/api/templates")
    public List<Template> findAllRecords() {
        return (List<Template>) repository.findAll();
    }
    @GetMapping("/api/templates/{id}")
    public Template findRecordById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/templates/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
    @GetMapping("/api/templates/create")
    public void createRecord() {
        Template newRecord = new Template();

        newRecord.setTitle("New Record");

        repository.save(newRecord);
    }
    @PutMapping("/api/templates")
    public void updateRecord(
            @RequestBody Song newRecord
    ) {
        Template oldRecord = repository.findById(newRecord.getId()).get();

        oldRecord.setTitle(newRecord.getTitle());

        repository.save(oldRecord);
    }

}
