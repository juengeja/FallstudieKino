package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.entity.Movie;
import com.example.kinoticketreservierungssystem.entity.ShowEvent;
import com.example.kinoticketreservierungssystem.repository.MovieRepository;
import com.example.kinoticketreservierungssystem.repository.ShowEventRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ShowEventMoviesTest {
    @Autowired
    ShowEventRepository showEventRepository;
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    ShowEventMovies showEventMovies;

    ShowEvent showEvent;
    @Test
    void getAllShowEventMovies() {
        Set<ShowEvent> showEvents = new HashSet<>();
        showEventRepository.findAllByLive(true).forEach(showEvents::add);
        Set<Movie> movieSet = new HashSet<>();
        for (ShowEvent showEvent : showEvents) {
            if (showEvent.getEventStart().isAfter(LocalDateTime.now(ZoneId.of("Europe/Berlin")))) {
                movieSet.add(showEvent.getMovieInfo());
            } else {
                showEvent.setLive(false);
                showEventRepository.save(showEvent);
            }

        }
        showEventMovies.getAllShowEventMovies();
        assertFalse(movieSet.isEmpty());
    }

    @Test
    void getAllShowEventDates() {
        Set<ShowEvent> showEventSchedule = new HashSet<>();

        assertEquals(showEventSchedule, showEventMovies.getAllShowEventDates("Movietest-ID"));

    }
}