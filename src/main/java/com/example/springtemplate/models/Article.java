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
    private int author;
    private int editor;
    private int journal;

    public Article(String title, String content, String bibliography, int author, int editor, int journal) {
        this.title = title;
        this.content = content;
        this.bibliography = bibliography;
        this.author = author;
        this.editor = editor;
        this.journal = journal;
    }

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

//    public Article(Integer id, String title, String content, String bibliography) {
//        this.id = id;
//        this.title = title;
//        this.content = content;
//        this.bibliography = bibliography;
//    }

    public Article() {}

    public int getAuthor() {
        return author;
    }

    public int getEditor() {
        return editor;
    }

    public int getJournal() {
        return journal;
    }

    public void setAuthor(int author) {
        this.author = author;
    }

    public void setEditor(int editor) {
        this.editor = editor;
    }

    public void setJournal(int journal) {
        this.journal = journal;
    }
}
