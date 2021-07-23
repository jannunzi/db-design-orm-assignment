package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Prescription;
import com.example.springtemplate.models.Symptom;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SymptomRepository
        extends CrudRepository<Symptom, Integer> {
  @Query(value = "SELECT * FROM symptoms",
          nativeQuery = true)
  List<Symptom> findAllSymptoms();
  @Query(value = "SELECT * FROM symptoms WHERE prescription=:userId",
          nativeQuery = true)
  List<Symptom> findSymptomsByPrescription(@Param("userId") Integer id);
}
