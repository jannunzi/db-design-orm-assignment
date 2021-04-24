package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name="journals")
public class Journal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @Enumerated(EnumType.STRING)
    private Topic topic;

    private String date;
    private Integer volume;

    //@OneToMany(mappedBy = "User")
    //@JsonIgnore
    //private List<Section> sections;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getVolume() {
        return volume;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
    }

    public Journal(Integer id, String name, Topic topic, String date, Integer volume) {
        this.id = id;
        this.name = name;
        this.topic = topic;
        this.date = date;
        this.volume = volume;
    }

    public Journal() {}
}

