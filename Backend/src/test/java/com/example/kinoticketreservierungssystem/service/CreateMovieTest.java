package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.entity.Movie;
import com.example.kinoticketreservierungssystem.repository.MovieRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CreateMovieTest {

    @Autowired
    MovieRepository movieRepository;
    @Autowired
    CreateMovie createMovieC;

    Movie movie;

    @Test
    void createMovie() {
        movie = new Movie("Movietest-ID", "Name", "Genre", 164, "Image", "Description");
        createMovieC.createMovie(movie);
        assertEquals(movie, movieRepository.findByMovieId("Movietest-ID").get());
    }
}
