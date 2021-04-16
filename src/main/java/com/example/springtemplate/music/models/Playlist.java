package com.example.springtemplate.music.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="playlists")
public class Playlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
//    private PlaylistKey key;
    private String name;

    @OneToMany(mappedBy = "playlist")
    private List<Song> songs;

//    public PlaylistKey getKey() {
//        return key;
//    }
//    public void setKey(PlaylistKey key) {
//        this.key = key;
//    }

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

    public List<Song> getSongs() {
        return songs;
    }

    public void setSongs(List<Song> songs) {
        this.songs = songs;
    }
}
