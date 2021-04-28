package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name="patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String firstname;
    private String lastname;
    private String username;
    private String password;
    private String email;
    private Date DOB;
    private String conditions;

    @ManyToOne
    @JsonIgnore
    private Doctor doctor;


    @OneToMany(mappedBy = "patient")
    @JsonIgnore
    private List<Prescription> prescriptions;

    public void setDOB(Date DOB) {
        this.DOB = DOB;
    }

    public List<Prescription> getPrescriptions() {
        return prescriptions;
    }

    public void setPrescriptions(List<Prescription> prescriptions) {
        this.prescriptions = prescriptions;
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstname() { return firstname; }
    public void setFirstname(String firstname) { this.firstname = firstname; }
    public String getLastname() { return lastname; }
    public void setLastname(String lastname) { this.lastname = lastname; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getConditions() { return conditions; }
    public void setConditions(String handle) { this.conditions = conditions; }
    public void setDob(Date date){
        this.DOB = date;
    }
    public Date getDOB(){return DOB;}
    public void setDoctor(Doctor doctor){
    this.doctor = doctor;
    }
    public Doctor getDoctor(){return doctor;}
    public Patient(String firstName, String lastname, String username, String password,
                   String email, Date DOB, String conditions,
                   Integer admitted) {
        this.username = username;
        this.password = password;
        this.firstname = firstName;
        this.lastname = lastname;
        this.email = email;
        this.conditions = conditions;

        this.DOB = DOB;
    }

    public Patient() {}
}
