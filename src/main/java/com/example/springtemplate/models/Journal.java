package com.example.springtemplate.models;

import javax.persistence.*;


@Entity
@Table(name="journals")
public class Journal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @Enumerated(EnumType.STRING)
    private Topic topic;

    private String releaseDate;
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

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Integer getVolume() {
        return volume;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
    }

    public Journal(Integer id, String name, Topic topic, String releaseDate, Integer volume) {
        this.id = id;
        this.name = name;
        this.topic = topic;
        this.releaseDate = releaseDate;
        this.volume = volume;
    }

    public Journal() {}
}

