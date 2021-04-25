package com.example.springtemplate.models;
import javax.persistence.*;

@Entity
@Table(name="authors")
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer authorId;

    @Enumerated(EnumType.STRING)
    private Topic topic;
    private Integer userId;

    public Author(Topic topic, Integer userId) {
        this.topic = topic;
        this.userId = userId;
    }

    public Integer getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Integer id) {
        this.authorId = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer id) {
        this.userId = id;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topc) {
        this.topic = topc;
    }
}
