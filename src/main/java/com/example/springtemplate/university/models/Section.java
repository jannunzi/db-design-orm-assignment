package com.example.springtemplate.university.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="sections")
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Integer seats;
    private String semester;
    private Integer year;
    @Column(columnDefinition="tinyint(1) default 1")
    private Boolean online;
    
    @ManyToOne
    @JsonIgnore
    private Course course;

//    @OneToMany(mappedBy="section")
//    private List<Enrollment> students;

//    public void addStudent(Student student, boolean teamLead) {
//        Enrollment association = new Enrollment();
//        association.setStudent(student);
//        association.setSection(this);
//        association.setStudentId(student.getId());
//        association.setSectionId(this.getId());
//        if(this.students == null)
//            this.students = new ArrayList<>();
//
//        this.students.add(association);
//        // Also add the association object to the student.
//        student.getSections().add(association);
//    }

    public Boolean getOnline() {
        return online;
    }

    public void setOnline(Boolean online) {
        this.online = online;
    }

    public Integer getSeats() {
        return seats;
    }

    public void setSeats(Integer seats) {
        this.seats = seats;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

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

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
