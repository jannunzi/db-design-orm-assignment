package com.example.springtemplate.models;

import java.sql.Timestamp;

public class User {
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String profilePicture;
    private Timestamp created;
    private Timestamp updated;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getProfilePicture() { return profilePicture; }
    public void setProfilePicture(String profilePicture) { this.profilePicture = profilePicture; }
    public Timestamp getCreated() { return created; }
    public void setCreated(Timestamp created) { this.created = created; }
    public Timestamp getUpdated() { return updated; }
    public void setUpdated(Timestamp updated) { this.updated = updated; }

    public User(String firstName, String lastName, String username, String password, String profilePicture) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePicture = profilePicture;
    }

    public User() {
    }
}
