package com.example.kinoticketreservierungssystem.controller;

import com.example.kinoticketreservierungssystem.entity.Movie;
import com.example.kinoticketreservierungssystem.entity.ShowEvent;
import com.example.kinoticketreservierungssystem.repository.MovieRepository;
import com.example.kinoticketreservierungssystem.repository.ShowEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping(value = "/admin")
@RestController
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    ShowEventRepository showEventRepository;
    @Autowired
    MovieRepository movieRepository;

    @PostMapping("/createshowevent")
    public ResponseEntity<ShowEvent> createShowEvent(@RequestBody ShowEvent showEvent){
        return new ResponseEntity<>(showEventRepository.save(showEvent), HttpStatus.OK);
    }

    @PostMapping("/createmovie")
    public ResponseEntity<Movie> createShowEvent(@RequestBody Movie movie){
        return new ResponseEntity<>(movieRepository.save(movie), HttpStatus.OK);
    }
}
