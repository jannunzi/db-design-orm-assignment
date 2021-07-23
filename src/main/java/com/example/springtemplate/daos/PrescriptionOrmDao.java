package com.example.springtemplate.daos;

import com.example.springtemplate.models.Patient;
import com.example.springtemplate.models.Prescription;
import com.example.springtemplate.models.Symptom;
import com.example.springtemplate.repositories.PrescriptionRepository;
import com.example.springtemplate.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PrescriptionOrmDao {
    @Autowired
    PrescriptionRepository prescriptionRepository;

    @Autowired
    PatientRepository patientRepository;

    @PostMapping("/api/prescriptions")
    public Prescription createPrescription(@RequestBody Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    @PostMapping("/api/patients/{id}/prescriptions")
    public Prescription createPrescriptionForPatient(@PathVariable("id") Integer id,
                                                     @RequestBody Prescription prescription) {
        prescription = prescriptionRepository.save(prescription);
        Patient patient = patientRepository.findById(id).get();
        prescription.setPatient(patient);
        return prescriptionRepository.save(prescription);
    }

    @GetMapping("/api/patients/{id}/prescriptions")
    public List<Prescription> findPrescriptionsForPatient(
            @PathVariable("id") Integer patientId) {
        Patient patient = patientRepository.findById(patientId).get();
        return patient.getPrescriptions();
    }

    @GetMapping("/api/prescriptions")
    public List<Prescription> findAllPrescriptions() {
        return (List<Prescription>) prescriptionRepository.findAll();
    }
    
    @GetMapping("/api/prescriptions/{id}")
    public Prescription findPrescriptionsById(
            @PathVariable("id") Integer id) {
        return prescriptionRepository.findById(id).get();
    }


    @PutMapping("/api/update/prescriptions/{id}/{newDose}")
    public Prescription updatePrescriptionsDose(
            @PathVariable("id") Integer id,
            @PathVariable("newDose") Integer newDose) {
        Prescription prescription = this.findPrescriptionsById(id);
        prescription.setDosage(newDose);
        return prescriptionRepository.save(prescription);
    }

    @PutMapping("/api/prescriptions/{id}")
    public Prescription updatePrescriptions(
            @PathVariable("id") Integer id,
            @RequestBody() Prescription newPrescription) {
        Prescription prescription = this.findPrescriptionsById(id);
        prescription.setPatient(newPrescription.getPatient());

        prescription.setMedication(newPrescription.getMedication());
        prescription.setDiagnosis(newPrescription.getDiagnosis());
        prescription.setDosage(newPrescription.getDosage());
        prescription.setSymptoms(newPrescription.getSymptoms());
        return prescriptionRepository.save(prescription);
    }

    @DeleteMapping("/api/prescriptions/{id}")
    public void deletePrescription(
            @PathVariable("id") Integer id) {
        prescriptionRepository.deleteById(id);
    }


}