package com.example.springtemplate.daos;

import com.example.springtemplate.models.Medications;
import com.example.springtemplate.repositories.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MedicationDao {
    @Autowired
    MedicationRepository medicationRepository;
    @GetMapping("/api/medications/findAllMeds")
    public List<Medications> findAllMeds() {
        return (List<Medications>) medicationRepository.findAll();
    }
    @GetMapping("/api/medications/findMedById/{id}")
    public Medications findMedById(@PathVariable("id") String name) {

        return medicationRepository.findMedByName(name);
    }
    @PostMapping("/api/medications/createMed/{name}")
    public Medications createMed(@PathVariable("name") String name) {
        Medications medications = new Medications();
        medications.setName(name);
        medicationRepository.save(medications);
        return medicationRepository.save(medications);
    }
    @PutMapping("/api/medications/updateMedication/{name}/{newName}")
    public Medications updateMedication(
            @PathVariable("id") String name,
            @PathVariable("newName") String newName) {
        Medications medications = medicationRepository.findMedByName(name);
        medications.setName(newName);
        return medicationRepository.save(medications);
    }
    @DeleteMapping("/api/medications/deleteMedication/{id}")
    public void deleteMedication(
            @PathVariable("id") Integer id) {
        medicationRepository.deleteById(id);
    }
}
