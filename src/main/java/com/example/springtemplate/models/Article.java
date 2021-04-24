package com.example.springtemplate.models;

import javax.persistence.*;
//import java.util.List;

@Entity
@Table(name="articles")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String content;
    private String bibliography;

    //@OneToMany(mappedBy = "User")
    //@JsonIgnore
    //private List<Section> sections;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getBibliography() {
        return bibliography;
    }

    public void setBibliography(String bibliography) {
        this.bibliography = bibliography;
    }

    public Article(Integer id, String title, String content, String bibliography) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.bibliography = bibliography;
    }

    public Article() {}
}
