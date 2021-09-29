package com.example.kinoticketreservierungssystem.controller;


import com.example.kinoticketreservierungssystem.entity.Movie;
import com.example.kinoticketreservierungssystem.repository.MovieRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/movies")
@RestController
@CrossOrigin(origins = "*")
public class MovieController {

    private final MovieRepository movieRepository;

    public MovieController(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }


    @GetMapping("/getAll")
    public ResponseEntity<Iterable<Movie>> getAllMovies(
    ) {
        return new ResponseEntity<>(movieRepository.findAll(), HttpStatus.OK);
    }
}