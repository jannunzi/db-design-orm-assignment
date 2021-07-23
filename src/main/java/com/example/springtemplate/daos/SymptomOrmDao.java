package com.example.springtemplate.daos;


import com.example.springtemplate.models.Prescription;
import com.example.springtemplate.models.Symptom;
import com.example.springtemplate.repositories.PrescriptionRepository;
import com.example.springtemplate.repositories.SymptomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SymptomOrmDao {
    @Autowired
    SymptomRepository symptomRepository;

    @Autowired
    PrescriptionRepository prescriptionRepository;

    @PostMapping("/api/symptoms")
    public Symptom createSymptom(@RequestBody Symptom symptom) {
        return symptomRepository.save(symptom);
    }

    @PostMapping("/api/prescriptions/{id}/symptoms")
    public Symptom createSymptomForPrescription(
            @PathVariable("id") Integer id,
            @RequestBody Symptom symptom) {
        symptom = symptomRepository.save(symptom);
        Prescription script = prescriptionRepository.findById(id).get();
        symptom.setPrescription(script);
        return symptomRepository.save(symptom);
    }

    @GetMapping("/api/prescriptions/{id}/symptoms")
    public List<Symptom> findSymptomsForPrescription(
            @PathVariable("id") Integer id) {
        Prescription prescription = prescriptionRepository.findById(id).get();
        return prescription.getSymptoms();
    }
    
    @GetMapping("/api/symptoms")
    public List<Symptom> findAllSymptoms() {
        return (List<Symptom>) symptomRepository.findAll();
    }
    
    @GetMapping("/api/symptoms/{id}")
    public Symptom findSymptomById(
            @PathVariable("id") Integer id) {
        return symptomRepository.findById(id).get();
    }

    @PutMapping("/api/symptoms/{id}")
    public Symptom updateSymptom(
            @PathVariable("id") Integer id,
            @RequestBody() Symptom newSymptom) {
        Symptom symptom = this.findSymptomById(id);
        symptom.setBenefits(newSymptom.getBenefits());
        symptom.setSideEffects(newSymptom.getSideEffects());
        symptom.setUsedFor(newSymptom.getUsedFor());
        symptom.setLastUsed(newSymptom.getLastUsed());
        return symptomRepository.save(symptom);
    }

    @DeleteMapping("/api/symptoms/{id}")
    public void deleteSymptom(
            @PathVariable("id") Integer id) {
        symptomRepository.deleteById(id);
    }
}