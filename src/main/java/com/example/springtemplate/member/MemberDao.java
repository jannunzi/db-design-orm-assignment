package com.example.springtemplate.member;

import com.example.springtemplate.movies.Movie;
import com.example.springtemplate.movies.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MemberDao {
    @Autowired
    MemberRepository repository;
    @GetMapping("/api/members")
    public List<Member> findAllRecords() {
        return (List<Member>) repository.findAll();
    }

    @GetMapping("/api/members/{id}")
    public Member findRecordById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/members/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
    @GetMapping("/api/members/create")
    public void createRecord() {
        Member newRecord = new Member();

        newRecord.setName("New Name");

        repository.save(newRecord);
    }
    @PutMapping("/api/members")
    public void updateRecord(
            @RequestBody Member newRecord
    ) {
        Member oldRecord = repository.findById(newRecord.getId()).get();

        oldRecord.setName(newRecord.getName());

        repository.save(oldRecord);
    }

}
