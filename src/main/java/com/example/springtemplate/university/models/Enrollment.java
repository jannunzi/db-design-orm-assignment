package com.example.springtemplate.university.models;

import javax.persistence.*;

//@Entity
//@Table(name="enrollments")
//@IdClass(EnrollmentId.class)
public class Enrollment {
//    @Id
    private Integer studentId;
//    @Id
    private Integer sectionId;

    private Float grade;
    private String letterGrade;

//    @ManyToOne
//    @PrimaryKeyJoinColumn(name="STUDENTID", referencedColumnName="ID")
    private Student student;

//    @ManyToOne
//    @PrimaryKeyJoinColumn(name="SECTIONID", referencedColumnName="ID")
    private Section section;

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public Integer getSectionId() {
        return sectionId;
    }

    public void setSectionId(Integer sectionId) {
        this.sectionId = sectionId;
    }

    public Float getGrade() {
        return grade;
    }

    public void setGrade(Float grade) {
        this.grade = grade;
    }

    public String getLetterGrade() {
        return letterGrade;
    }

    public void setLetterGrade(String letterGrade) {
        this.letterGrade = letterGrade;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Section getSection() {
        return section;
    }

    public void setSection(Section section) {
        this.section = section;
    }


}
