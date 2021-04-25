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

    public Author(Topic topic, Integer userId) {
        this.primaryTopic = topic;
        this.userId = userId;
    }

    public Author() {
    }

    public Integer getAuthorId() {
        return id;
    }

    public void setAuthorId(Integer id) {
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
