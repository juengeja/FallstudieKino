package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.entity.Movie;
import com.example.kinoticketreservierungssystem.entity.ShowEvent;
import com.example.kinoticketreservierungssystem.repository.MovieRepository;
import com.example.kinoticketreservierungssystem.repository.ShowEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ShowEventMovies {

    @Autowired
    ShowEventRepository showEventRepository;
    @Autowired
    MovieRepository movieRepository;

    public Set<Movie> getAllShowEventMovies(){
        Set<ShowEvent> showEvents = new HashSet<>();
        showEventRepository.findAllByLive(true).forEach(showEvents::add);
        Set<Movie> movieSet = new HashSet<>();
        for (ShowEvent showEvent:showEvents){
            if(showEvent.getEventStart().isAfter(LocalDateTime.now(ZoneId.of("Europe/Berlin")))){
                movieSet.add(showEvent.getMovieInfo());
            }else {
                showEvent.setLive(false);
                showEventRepository.save(showEvent);
            }
        }
        return movieSet;
    }

    public Set<ShowEvent> getAllShowEventDates(String movieID){
        Set<ShowEvent> showEventSchedule = new HashSet<>();
        Movie movie = movieRepository.findByMovieId(movieID).get();
        showEventRepository.findAllByMovieInfoAndLive(movie,true).forEach(showEventSchedule::add);
        return showEventSchedule;
    }
}
