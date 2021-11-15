package com.example.springtemplate.team;

import com.example.springtemplate.member.Member;
import com.example.springtemplate.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TeamDao {
    @Autowired
    TeamRepository teamRepository;

    @Autowired
    MemberRepository memberRepository;
    
    @GetMapping("/api/teams")
    public List<Team> findAllRecords() {
        return (List<Team>) teamRepository.findAll();
    }

    @GetMapping("/api/teams/{id}")
    public Team findRecordById(
            @PathVariable("id") Integer id) {
        return teamRepository.findById(id).get();
    }
    @GetMapping("/api/teams/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        teamRepository.deleteById(id);
    }
    @GetMapping("/api/teams/create")
    public void createRecord() {
        Team newRecord = new Team();

        newRecord.setName("New Name");

        teamRepository.save(newRecord);
    }
    @GetMapping("/api/teams/{id}/members/create")
    public void createOneToMany(
            @PathVariable("id") Integer id
    ) {
        Team oneRecord = findRecordById(id);

        Member newManyRecord = new Member();
        newManyRecord.setName("New Member");
        newManyRecord.setTeam(oneRecord);

        oneRecord.getMembers().add(newManyRecord);
        
        teamRepository.save(oneRecord);
        memberRepository.save(newManyRecord);
    }
    @GetMapping("/api/teams/{id}/members")
    public List<Member> findOneToManyRecords(
            @PathVariable("id") Integer id) {
        return teamRepository.findById(id).get().getMembers();
    }
    @PutMapping("/api/teams")
    public void updateRecord(
            @RequestBody Team newRecord
    ) {
        Team oldRecord = teamRepository.findById(newRecord.getId()).get();

        oldRecord.setName(newRecord.getName());

        teamRepository.save(oldRecord);
    }

}
