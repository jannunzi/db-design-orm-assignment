package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Doctor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DoctorRepository
        extends CrudRepository<Doctor, Integer> {
    @Query(value = "SELECT * FROM doctors",
            nativeQuery = true)
    List<Doctor> findAllDoctors();

    @Query(value = "SELECT * FROM doctors WHERE id=:userId",
            nativeQuery = true)
    Doctor findDoctorById(@Param("userId") Integer id);
}
