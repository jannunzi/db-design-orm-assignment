package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;
import java.sql.Timestamp;

@Entity
@Table(name="doctors")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstname;
    private String lastname;
    private String username;
    private String password;
    private String email;
    private Date DOB;

    private String position;
    private String hospital;

    @OneToMany(mappedBy = "doctor")
    @JsonIgnore
    private List<Patient> patients;


    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstname() { return firstname; }
    public void setFirstname(String firstName) { this.firstname = firstName; }
    public String getLastname() { return lastname; }
    public void setLastname(String lastName) { this.lastname = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }

    public Doctor(String firstName, String lastName, String username, String password,
                  String email, Date DOB, String position, String hospital) {
        this.username = username;
        this.password = password;
        this.firstname = firstName;
        this.lastname = lastName;
        this.email = email;
        this.DOB = DOB;
        this.position = position;
        this.hospital = hospital;
    }

    public Doctor() {}

    public Date getDOB() {
        return DOB;
    }

    public void setDOB(Date DOB) {
        this.DOB = DOB;
    }

    public String getHospital() {
        return hospital;
    }

    public void setHospital(String hospital) {
        this.hospital = hospital;
    }

    public List<Patient> getPatients() {
        return patients;
    }

    public void setPatients(List<Patient> patients) {
        this.patients = patients;
    }

}
