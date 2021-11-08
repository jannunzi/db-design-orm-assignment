package com.example.springtemplate.team;

import com.example.springtemplate.member.Member;
import com.example.springtemplate.team.Team;
import com.example.springtemplate.team.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TeamDao {
    @Autowired
    TeamRepository repository;
    @GetMapping("/api/teams")
    public List<Team> findAllRecords() {
        return (List<Team>) repository.findAll();
    }

    @GetMapping("/api/teams/{id}")
    public Team findRecordById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/teams/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
    @GetMapping("/api/teams/create")
    public void createRecord() {
        Team newRecord = new Team();

        newRecord.setName("New Name");

        repository.save(newRecord);
    }
    @GetMapping("/api/teams/{id}/members")
    public List<Member> findOneToManyRecords(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get().getMembers();
    }
    @PutMapping("/api/teams")
    public void updateRecord(
            @RequestBody Team newRecord
    ) {
        Team oldRecord = repository.findById(newRecord.getId()).get();

        oldRecord.setName(newRecord.getName());

        repository.save(oldRecord);
    }

}
