package com.example.springtemplate.daos;

import com.example.springtemplate.models.Journal;
import com.example.springtemplate.repositories.JournalRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class JournalOrmDao {
    @Autowired
    JournalRepository journalRepository;

    @PostMapping("/api/journals")
    public Journal createJournal(@RequestBody Journal journal) {
        return journalRepository.save(journal);
    }
    
    @GetMapping("/api/journals")
    public List<Journal> findAllJournals() {
        return journalRepository.findAllJournals();
    }
    
    @GetMapping("/api/journals/{journalId}")
    public Journal findJournalById(
            @PathVariable("journalId") Integer id) {
        return journalRepository.findJournalById(id);
    }
    
    @PutMapping("/api/journals/{journalId}")
    public Journal updateJournal(
            @PathVariable("journalId") Integer id,
            @RequestBody Journal journalUpdates) {
        Journal journal = journalRepository.findJournalById(id);
        journal.setName(journalUpdates.getName());
        journal.setTopic(journalUpdates.getTopic());
        journal.setReleaseDate(journalUpdates.getReleaseDate());
        journal.setVolume(journalUpdates.getVolume());
        return journalRepository.save(journal);
    }
    
    @DeleteMapping("/api/journals/{journalId}")
    public void deleteJournal(
            @PathVariable("journalId") Integer id) {
        journalRepository.deleteById(id);
    }
}
