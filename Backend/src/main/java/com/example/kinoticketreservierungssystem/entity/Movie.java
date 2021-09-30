package com.example.kinoticketreservierungssystem.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int movieId;
    private String name;
    private String genre;
    private int duration;
    private LocalDate dateOfPublish;
    @Column(length = 1000)
    private String description;


    public int getDuration() {
        return duration;
    }

    public void setDuration(int length) {
        this.duration = length;
    }

    public String getGenre() { return genre; }

    public void setGenre(String genre) { this.genre = genre; }

    public LocalDate getDateOfPublish() {
        return dateOfPublish;
    }

    public void setDateOfPublish(LocalDate dateOfPublish) {
        this.dateOfPublish = dateOfPublish;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public String getName() {
        return name;
    }

    public void setName(String title) {
        this.name = title;
    }
}
