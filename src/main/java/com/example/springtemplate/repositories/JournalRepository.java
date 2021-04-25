package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Journal;
import com.example.springtemplate.models.User;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JournalRepository
        extends CrudRepository<Journal, Integer> {
    @Query(value = "SELECT * FROM journals",
            nativeQuery = true)
    public List<Journal> findAllJournals();
    @Query(value = "SELECT * FROM journals WHERE id=:journalId",
            nativeQuery = true)
    public Journal findJournalById(@Param("journalId") Integer id);
}
