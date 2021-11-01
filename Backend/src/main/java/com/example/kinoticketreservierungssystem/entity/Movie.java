package com.example.kinoticketreservierungssystem.entity;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import com.google.gson.Gson;
import org.springframework.data.annotation.Id;
import java.util.List;

@Container(containerName = "Movies")
public class Movie {
    @Id
    private String movieId;
    private String movieName;
    //Genre naming convention: Action, Thriller, Drama, Comedy...
    @PartitionKey
    private String mainGenre;
    private List<String> genres;
    private int duration;
    private String trailer;
    private List<String> actors;
    private String producer;
    private String director;
    private String img;
    private String description;
    private boolean successful = true;

    public Movie(String movieId, String movieName, String mainGenre, int duration, String img, String description) {
        this.movieId = movieId;
        this.movieName = movieName;
        this.mainGenre = mainGenre;
        this.duration = duration;
        this.img = img;
        this.description = description;
    }

    public Movie() {

    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this, Movie.class);
    }

    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getMainGenre() {
        return mainGenre;
    }

    public void setMainGenre(String mainGenre) {
        this.mainGenre = mainGenre;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    public List<String> getActors() {
        return actors;
    }

    public void setActors(List<String> actors) {
        this.actors = actors;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Movie movie = (Movie) o;

        if (!movieId.equals(movie.movieId)) return false;
        return mainGenre.equals(movie.mainGenre);
    }

    @Override
    public int hashCode() {
        int result = movieId.hashCode();
        result = 31 * result + mainGenre.hashCode();
        return result;
    }
}


