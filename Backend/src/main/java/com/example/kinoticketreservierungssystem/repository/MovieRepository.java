package com.example.kinoticketreservierungssystem.repository;

import com.example.kinoticketreservierungssystem.entity.Movie;
import org.springframework.data.repository.CrudRepository;



public interface MovieRepository extends CrudRepository<Movie, Integer> {

}
