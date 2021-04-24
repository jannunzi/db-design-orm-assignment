package com.example.springtemplate.models;
import javax.persistence.*;

@Entity
@Table(name="authors")
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer authorId;
    private String subject;
    private Integer userId;

    public Integer getAuthorId() { return authorId; }
    public void setAuthorId(Integer id) { this.authorId = id; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public Integer getUserId() { return userId; }
    public void setUserId(Integer id) { this.userId = id; }

    public Author(Integer authorId, String subject, Integer userId) {
        this.authorId = authorId;
        this.subject = subject;
        this.userId = userId;
    }

    public Author() {}
}
