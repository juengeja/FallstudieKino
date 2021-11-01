package com.example.kinoticketreservierungssystem.controller;

import com.example.kinoticketreservierungssystem.entity.Movie;
import com.example.kinoticketreservierungssystem.entity.SeatingTemplate;
import com.example.kinoticketreservierungssystem.repository.CinemaRepository;
import com.example.kinoticketreservierungssystem.repository.EventRoomRepository;
import com.example.kinoticketreservierungssystem.repository.MovieRepository;
import com.example.kinoticketreservierungssystem.repository.SeatingTemplateRepository;
import com.example.kinoticketreservierungssystem.service.DropdownSelection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RequestMapping(value = "/dropdown")
@RestController
@CrossOrigin(origins = "*")
public class DropdownController {

    @Autowired
    SeatingTemplateRepository seatingTemplateRepository;
    @Autowired
    CinemaRepository cinemaRepository;
    @Autowired
    EventRoomRepository eventRoomRepository;
    @Autowired
    DropdownSelection dropdownSelection;
    @Autowired
    MovieRepository movieRepository;

    @GetMapping("/seatingtemplates/{cinema}")
    public ResponseEntity<Iterable<SeatingTemplate>> frontShowAllSeatingTemplates(@PathVariable String cinema){
        Set<SeatingTemplate> seatingTemplates = new HashSet<>();
        seatingTemplateRepository.findAll().forEach(seatingTemplates::add);
        return new ResponseEntity<>(seatingTemplates, HttpStatus.OK);
    }

    @GetMapping("/movies/{cinema}")
    public ResponseEntity<Iterable<Movie>> frontShowAllMovies(@PathVariable String cinema){
        Set<Movie> movies = new HashSet<>();
        movieRepository.findAll().forEach(movies::add);
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }
}
