package com.example.springtemplate.examples.m2mwork.m2m;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @OneToMany(mappedBy = "project", cascade = CascadeType.REMOVE)
    private List<ProjectAssignment> employees;
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<ProjectAssignment> getEmployees() {
        return employees;
    }

    public void setEmployees(List<ProjectAssignment> employees) {
        this.employees = employees;
    }
}
