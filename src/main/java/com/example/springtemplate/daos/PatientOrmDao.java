package com.example.springtemplate.daos;

import com.example.springtemplate.models.Doctor;
import com.example.springtemplate.models.Patient;
import com.example.springtemplate.repositories.DoctorRepository;
import com.example.springtemplate.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PatientOrmDao {
  @Autowired
  DoctorRepository doctorRepository;

  @Autowired
  PatientRepository patientRepository;


  @PostMapping("/api/doctors/{doctorId}/patients")
  public Patient createPatientForDoctor(@PathVariable("doctorId") Integer doctorId,
                                        @RequestBody Patient patient){
    patient = patientRepository.save(patient);
    Doctor doc = doctorRepository.findById(doctorId).get();
    patient.setDoctor(doc);
    return patientRepository.save(patient);
  }

  @GetMapping("/api/doctors/{id}/patients")
  public List<Patient> findPatientsForDoctor(@PathVariable("id") Integer docId){
    Doctor doc = doctorRepository.findById(docId).get();
    return doc.getPatients();
  }

  @PostMapping("/api/patients")
  public Patient createPatient(@RequestBody Patient patient) {
    return patientRepository.save(patient);
  }

  @GetMapping("/api/patients")
  public List<Patient> findAllPatients() {
    return (List<Patient>) patientRepository.findAll();
  }

  @GetMapping("/api/patients/{userId}")
  public Patient findPatientById(
          @PathVariable("userId") Integer id) {
    return patientRepository.findById(id).get();
  }

  @PutMapping("/api/patients/{userId}")
  public Patient updatePatient(
          @PathVariable("userId") Integer id,
          @RequestBody Patient patientUpdates) {
    Patient patient = patientRepository.findById(id).get();
    patient.setFirstname(patientUpdates.getFirstname());
    patient.setLastname(patientUpdates.getLastname());
    patient.setUsername(patientUpdates.getUsername());
    patient.setPassword(patientUpdates.getPassword());
    patient.setEmail(patientUpdates.getEmail());
    patient.setDOB(patientUpdates.getDOB());
    patient.setDoctor(patientUpdates.getDoctor());
    patient.setConditions(patientUpdates.getConditions());
    return patientRepository.save(patient);
  }

  @DeleteMapping("/api/patients/{userId}")
  public void deletePatient(
          @PathVariable("userId") Integer id) {
    patientRepository.deleteById(id);
  }
}