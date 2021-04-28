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

    @PostMapping("/api/prescriptions/{scriptId}/symptoms")
    public Symptom createSymptomForPrescription(
            @PathVariable("scriptId") Integer pid,
            @RequestBody Symptom symptom) {
        symptom = symptomRepository.save(symptom);
        Prescription script = prescriptionRepository.findById(pid).get();
        symptom.setPrescription(script);
        return symptomRepository.save(symptom);
    }

    @GetMapping("/api/prescriptions/{pid}/symptoms")
    public List<Symptom> findSymptomForPrescription(
            @PathVariable("pid") Integer courseId) {
        Prescription script = prescriptionRepository.findById(courseId).get();
        return script.getSymptoms();
    }
    
    @GetMapping("/api/symptoms")
    public List<Symptom> findAllSymptoms() {
        return (List<Symptom>) symptomRepository.findAll();
    }
    
    @GetMapping("/api/symptoms/{symptomId}")
    public Symptom findSymptomById(
            @PathVariable("symptomId") Integer id) {
        return symptomRepository.findById(id).get();
    }

    @PutMapping("/api/symptoms/{symptomId}")
    public Symptom updateSymptom(
            @PathVariable("sectionId") Integer id,
            @RequestBody() Symptom newSymptom) {
        Symptom symptom = this.findSymptomById(id);
        symptom.setBenefits(newSymptom.getBenefits());
        symptom.setSideEffects(newSymptom.getSideEffects());
        symptom.setUsedFor(newSymptom.getUsedFor());
        symptom.setLastUsed(newSymptom.getLastUsed());
        return symptomRepository.save(symptom);
    }

    @DeleteMapping("/api/symptoms/{symptomId}")
    public void deleteSection(
            @PathVariable("symptomId") Integer id) {
        symptomRepository.deleteById(id);
    }
}