package com.example.springtemplate.models;

public enum Role {
    HEAD_EDITOR ("HEAD_EDITOR"),
    JUNIOR_EDITOR ("JUNIOR_EDITOR");

    public String description;

    Role(String s) {
        this.description = s;
    }

    public static Role getRoleFromString(String role) {
        switch (role) {
            case "HEAD_EDITOR":
                return HEAD_EDITOR;
            case "JUNIOR_EDITOR":
                return JUNIOR_EDITOR;
            default:
                throw new IllegalArgumentException("Invalid Role!");
        }
    }
}
