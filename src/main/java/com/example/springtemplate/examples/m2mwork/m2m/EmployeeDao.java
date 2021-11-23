package com.example.springtemplate.examples.m2mwork.m2m;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class EmployeeDao {
    @Autowired
    EmployeeRepository employeeRepository;

//    @Autowired
//    MovieRepository movieRepository;
    
    @GetMapping("/api/m2m/employees")
    public List<Employee> findAllRecords() {
        return (List<Employee>) employeeRepository.findAll();
    }

    @GetMapping("/api/m2m/employees/{id}")
    public Employee findRecordById(
            @PathVariable("id") Integer id) {
        return employeeRepository.findById(id).get();
    }
    @GetMapping("/api/m2m/employees/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        employeeRepository.deleteById(id);
    }
    @GetMapping("/api/m2m/employees/create")
    public void createRecord() {
        Employee newRecord = new Employee();

        newRecord.setFirstName("New");
        newRecord.setLastName("Employee");

        employeeRepository.save(newRecord);
    }
    @GetMapping("/api/m2m/employees/{id}/project/create")
    public void createOneToMany(
            @PathVariable("id") Integer id
    ) {
        Employee oneRecord = findRecordById(id);

        Project newManyRecord = new Project();
        newManyRecord.setName("New Project");
    }
//    @GetMapping("/api/m2m/employees/{id}/projects")
//    public List<ProjectAssignment> findOneToManyRecords(
//            @PathVariable("id") Integer id) {
//        return employeeRepository.findById(id).get().getProjects();
//    }
    @PutMapping("/api/m2m/employees")
    public void updateRecord(
            @RequestBody Employee newRecord
    ) {
        Employee oldRecord = employeeRepository.findById(newRecord.getId()).get();

        oldRecord.setFirstName(newRecord.getFirstName());
        oldRecord.setLastName(newRecord.getLastName());

        employeeRepository.save(oldRecord);
    }
}
