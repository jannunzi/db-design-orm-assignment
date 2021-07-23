package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Doctor;
import com.example.springtemplate.models.Patient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PatientRepository
        extends CrudRepository<Patient, Integer> {
  @Query(value = "SELECT * FROM patients",
          nativeQuery = true)
  List<Patient> findAllPatients();
  @Query(value = "SELECT * FROM patients WHERE id=:userId",
          nativeQuery = true)
  Patient findPatientById(@Param("userId") Integer id);
  @Query(value = "SELECT * FROM patients WHERE patients.doctor_id=:doctorId",
  nativeQuery = true)
  List<Patient> findPatientsForDoctor(@Param("doctorId") Doctor doc);

}
