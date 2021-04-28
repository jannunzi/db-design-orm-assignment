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
    public Prescription createPrescription(@RequestBody Prescription script) {
        return prescriptionRepository.save(script);
    }

    @PostMapping("/api/patients/{patientId}/prescriptions")
    public Prescription createPrescriptionForPatient(@PathVariable("patientId") Integer pid,
                                                     @RequestBody Prescription script) {
        script = prescriptionRepository.save(script);
        Patient patient = patientRepository.findById(pid).get();
        script.setPatient(patient);
        return prescriptionRepository.save(script);
    }

    @GetMapping("/api/patients/{pid}/prescriptions")
    public List<Prescription> findPrescriptionsForPatient(
            @PathVariable("pid") Integer patientId) {
        Patient patient = patientRepository.findById(patientId).get();
        return patient.getPrescriptions();
    }

    @GetMapping("/api/prescriptions")
    public List<Prescription> findAllPrescriptions() {
        return (List<Prescription>) prescriptionRepository.findAll();
    }
    
    @GetMapping("/api/prescriptions/{scriptId}")
    public Prescription findPrescriptionsById(
            @PathVariable("scriptId") Integer id) {
        return prescriptionRepository.findById(id).get();
    }


    @PutMapping("/api/update/prescriptions/{scriptId}/{newDose}")
    public Prescription updatePrescriptionsDose(
            @PathVariable("scriptId") Integer id,
            @PathVariable("newDose") Integer newDose) {
        Prescription script = this.findPrescriptionsById(id);
        script.setDosage(newDose);
        return prescriptionRepository.save(script);
    }

    @PutMapping("/api/prescriptions/{scriptId}")
    public Prescription updatePrescriptions(
            @PathVariable("scriptId") Integer id,
            @RequestBody() Prescription newScript) {
        Prescription script = this.findPrescriptionsById(id);
        script.setPatient(newScript.getPatient());

        script.setMedication(newScript.getMedication());
        script.setDiagnosis(newScript.getDiagnosis());
        script.setDosage(newScript.getDosage());
        script.setSymptoms(newScript.getSymptoms());
        return prescriptionRepository.save(script);
    }

    @DeleteMapping("/api/prescriptions/{scriptId}")
    public void deletePrescription(
            @PathVariable("scriptId") Integer id) {
        prescriptionRepository.deleteById(id);
    }


}