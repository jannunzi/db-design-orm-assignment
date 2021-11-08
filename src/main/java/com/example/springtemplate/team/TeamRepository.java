package com.example.springtemplate.team;

import com.example.springtemplate.team.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository
        extends CrudRepository<Team, Integer> {
}
