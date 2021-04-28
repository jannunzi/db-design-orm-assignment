package com.example.springtemplate.daos;

import com.example.springtemplate.models.Doctor;
import com.example.springtemplate.repositories.DoctorRepository;
import com.example.springtemplate.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class DoctorOrmDao {
    @Autowired
    DoctorRepository doctorRepository;

    @Autowired
    PatientRepository patientRepository;


    @PostMapping("/api/doctors")
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorRepository.save(doctor);
    }
    
    @GetMapping("/api/doctors")
    public List<Doctor> findAllDoctors() {
        return (List<Doctor>) doctorRepository.findAll();
    }
    
    @GetMapping("/api/doctors/{userId}")
    public Doctor findDoctorById(
            @PathVariable("userId") Integer id) {
        return doctorRepository.findById(id).get();
    }
    
    @PutMapping("/api/doctors/{userId}")
    public Doctor updateDoctor(
            @PathVariable("userId") Integer id,
            @RequestBody Doctor doctorUpdates) {
        Doctor doctor = doctorRepository.findById(id).get();
        doctor.setFirstname(doctorUpdates.getFirstname());
        doctor.setLastname(doctorUpdates.getLastname());
        doctor.setUsername(doctorUpdates.getUsername());
        doctor.setPassword(doctorUpdates.getPassword());
        doctor.setEmail(doctorUpdates.getEmail());
        doctor.setDOB(doctorUpdates.getDOB());
        doctor.setPosition(doctorUpdates.getPosition());
        doctor.setHospital(doctorUpdates.getHospital());
        return doctorRepository.save(doctor);
    }
    
    @DeleteMapping("/api/doctors/{userId}")
    public void deleteUser(
            @PathVariable("userId") Integer id) {
        doctorRepository.deleteById(id);
    }
}