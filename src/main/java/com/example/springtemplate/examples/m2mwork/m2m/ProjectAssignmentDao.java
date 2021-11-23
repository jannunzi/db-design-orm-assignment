package com.example.springtemplate.examples.m2mwork.m2m;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProjectAssignmentDao {
    @Autowired
    ProjectAssignmentRepository repository;
    @Autowired
    ProjectRepository projectRepository;
    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping("/api/m2m/employees/{id}/projects")
    public List<ProjectAssignment> findAllRelations(
            @PathVariable("id") Integer id
    ) {
        return (List<ProjectAssignment>) repository.findProjectsForEmployee(id);
    }
    @GetMapping("/api/m2m/projects/{id}/employees")
    public List<ProjectAssignment> findAllInverseRelations(
            @PathVariable("id") Integer id
    ) {
        return (List<ProjectAssignment>) repository.findEmployeesForProject(id);
    }
}
