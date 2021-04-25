package com.example.springtemplate.models;
import javax.persistence.*;

@Entity
@Table(name="editors")
public class Editor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    private Role role;

    private Integer userId;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Role getRole() { return role; }
    public void setRole(Role role) { this.role = role; }

    public Integer getUserId() { return userId; }
    public void setUserId(Integer id) { this.userId = id; }

    public Editor(Integer id, Role role, Integer userId) {
        this.id = id;
        this.role = role;
        this.userId = userId;
    }

    public Editor() {}
}

