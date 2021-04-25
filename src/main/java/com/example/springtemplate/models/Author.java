package com.example.springtemplate.models;
import javax.persistence.*;

@Entity
@Table(name="authors")
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    private Topic primaryTopic;
    private Integer userId;

    public Author(Integer id, Topic primaryTopic, Integer userId) {
        this.id = id;
        this.primaryTopic = primaryTopic;
        this.userId = userId;
    }

    public Author() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer id) {
        this.userId = id;
    }

    public Topic getTopic() {
        return primaryTopic;
    }

    public void setTopic(Topic topc) {
        this.primaryTopic = topc;
    }
}
