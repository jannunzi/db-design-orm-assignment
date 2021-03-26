package com.example.springtemplate.university.models;

import java.io.Serializable;

public class EnrollmentId implements Serializable {
    private Integer studentId;
    private Integer sectionId;

    public int hashCode() {
        return (int)(studentId + sectionId);
    }

    public boolean equals(Object object) {
        if (object instanceof EnrollmentId) {
            EnrollmentId otherId = (EnrollmentId) object;
            return (otherId.studentId == this.studentId) && (otherId.sectionId == this.sectionId);
        }
        return false;
    }

}
