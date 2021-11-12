package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.blSupport.SeatMod;
import com.example.kinoticketreservierungssystem.entity.Movie;
import com.example.kinoticketreservierungssystem.entity.SeatingTemplate;
import com.example.kinoticketreservierungssystem.entity.ShowEvent;
import com.example.kinoticketreservierungssystem.repository.SeatingTemplateRepository;
import com.example.kinoticketreservierungssystem.repository.ShowEventRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.HashSet;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;


@SpringBootTest
class SeatingPlanTest {


    @Autowired
    ShowEventRepository showEventRepository;
    @Autowired
    SeatingTemplateRepository seatingTemplateRepository;
    @Autowired
    SeatingPlan seatingPlan;

    //SelectSeatObjekten
    ShowEvent showEvent;
    HashSet seats;

    //Testklasen
    ShowEvent testEvent;
    SeatingTemplate seatingTemplateInfo;
    Movie movie;
    SeatMod seatMod;
    SeatMod seatModTest;
    LocalDateTime eventStart;
    HashMap <String, SeatMod> seatMap;


    @Test
    void selectSeats() {

        showEvent = showEventRepository.findByShowEventID("Showevent-ID").get();

        seats = new HashSet();
        seats.add("Eventtest-IDB1");
        seats.add("Eventtest-IDC2");

        seatingPlan.selectSeats(seats, showEvent);

        assertFalse(showEvent.getSeatingTemplateInfo().getSeatMap().isEmpty());

        assertTrue(showEvent.getSeatingTemplateInfo().getSeatMap().get("Eventtest-IDB1").isBooked() == true);



    }

    @Test
    void deselectSeats() {

        showEvent = showEventRepository.findByShowEventID("Showevent-ID").get();

        seats = new HashSet<String>();
        seats.add("Eventtest-IDC1");
        seats.add("Eventtest-IDD2");

        seatingPlan.deselectSeats(seats, showEvent);

        assertFalse(showEvent.getSeatingTemplateInfo().getSeatMap().isEmpty());

        assertFalse(showEvent.getSeatingTemplateInfo().getSeatMap().get("Eventtest-IDC1").isBooked());






    }
}