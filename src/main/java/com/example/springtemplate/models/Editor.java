package com.example.springtemplate.models;
import javax.persistence.*;

@Entity
@Table(name="editors")
public class Editor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer editorId;

    @Enumerated(EnumType.STRING)
    private Role role;

    private Integer userId;

    public Integer getEditorId() { return editorId; }
    public void setEditorId(Integer id) { this.editorId = id; }

    public Role getRole() { return role; }
    public void setRole(Role role) { this.role = role; }

    public Integer getUserId() { return userId; }
    public void setUserId(Integer id) { this.userId = id; }

    public Editor(Integer editorId, Role role, Integer userId) {
        this.editorId = editorId;
        this.role = role;
        this.userId = userId;
    }

    public Editor() {}
}

