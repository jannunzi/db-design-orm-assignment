package com.example.springtemplate.university.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;

    @ManyToOne
    private Department major;

//    @OneToMany(mappedBy = "student")
//    private List<Enrollment> sections;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Department getMajor() {
        return major;
    }

    public void setMajor(Department major) {
        this.major = major;
    }

//    public List<Enrollment> getSections() {
//        return sections;
//    }
//
//    public void setSections(List<Enrollment> sections) {
//        this.sections = sections;
//    }
}
