package com.example.springtemplate.examples.m2mwork.m2m;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "project_assignments")
public class ProjectAssignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String status;
    
    @ManyToOne
    @JsonIgnore
    private Project project;
    
    @ManyToOne
    @JsonIgnore
    private Employee employee;

    public Integer getId() {
        return id;
    }

    @Transient
    public String getProjectName() {
        return project.getName();
    }
    
    @Transient
    public String getEmployeeName() {
        return employee.getFirstName() + " " + employee.getLastName();
    }
    
    public void setId(Integer id) {
        this.id = id;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
