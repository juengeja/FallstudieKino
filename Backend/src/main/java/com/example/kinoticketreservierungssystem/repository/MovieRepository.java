package com.example.kinoticketreservierungssystem.repository;

import com.azure.spring.data.cosmos.repository.CosmosRepository;
import com.example.kinoticketreservierungssystem.entity.Movie;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends CosmosRepository<Movie, String> {

    Optional<Movie> findByMovieId(String movieId);
    Optional<Movie> findByMainGenre(String mainGenre);

}
