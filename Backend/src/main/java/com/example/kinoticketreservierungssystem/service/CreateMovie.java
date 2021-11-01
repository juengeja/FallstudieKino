package com.example.kinoticketreservierungssystem.service;

import com.azure.spring.data.cosmos.core.ReactiveCosmosTemplate;
import com.example.kinoticketreservierungssystem.entity.Movie;
import com.example.kinoticketreservierungssystem.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.List;


@Service
public class CreateMovie {


    @Autowired
    MovieRepository movieRepository;

    public void createMovie(Movie movie){
        movieRepository.save(movie);


    }

}
