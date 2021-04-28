package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Doctor;
import com.example.springtemplate.models.Prescription;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PrescriptionRepository
        extends CrudRepository<Prescription, Integer> {
  @Query(value = "SELECT * FROM prescriptions",
          nativeQuery = true)
  List<Prescription> findAllPrescriptions();
  @Query(value = "SELECT * FROM prescriptions WHERE patient=:userId",
          nativeQuery = true)
  Prescription findPrescriptionByPatient(@Param("userId") Integer id);
}
