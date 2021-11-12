package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.blSupport.SeatMod;
import com.example.kinoticketreservierungssystem.entity.*;
import com.example.kinoticketreservierungssystem.repository.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CreateEntitiesTest {

    @Autowired
    CinemaRepository cinemaRepository;
    @Autowired
    EventRoomRepository eventRoomRepository;
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    SeatRepository seatRepository;
    @Autowired
    SeatingTemplateRepository seatingTemplateRepository;
    @Autowired
    CreateEntities createEntities;
    @Autowired
    ShowEventRepository showEventRepository;

    Cinema cinema;
    Cinema cinemaInfo;
    EventRoom eventRoom;
    ShowEvent showEvent;
    SeatingTemplate seatingTemplate;
    LocalDateTime eventStart;
    Map<String, SeatMod> seatMap;
    SeatMod seatMod;
    Movie movie;
    List<Seat> seats;
    Seat seat1;
    Seat seat2;
    Seat seat3;
    Seat seat4;
    Seat seat5;
    Seat seat6;
    Seat seat7;
    Seat seat8;
    Seat seat9;
    Seat seat10;
    Seat seat11;
    Seat seat12;
    Seat seat13;
    Seat seat14;
    Seat seat15;
    Seat seat16;
    Seat seat17;
    Seat seat18;
    Seat seat19;
    Seat seat20;
    Seat seat21;
    Seat seat22;
    Seat seat23;
    Seat seat24;

    @Test
    void createCinema() {
        cinema = new Cinema("Cinematest-ID", "Country","State","City", "Street", 123,4567,"Mail","PhoneNumber");
        createEntities.createCinema("Cinematest-ID", "Country", "State", "City", "Street", 123, 4567, "Mail", "PhoneNumber");
        assertEquals(cinema, cinemaRepository.findByCinemaID("Cinematest-ID").get());

    }

    @Test
    void createEventRoom() {
        cinema = cinemaRepository.findByCinemaID("Cinematest-ID").get();
        eventRoom = new EventRoom("Eventtest-ID","ScreenSize", cinema);
        createEntities.createEventRoom("Eventtest-ID", "ScreenSize", cinema);
        assertEquals(eventRoom, eventRoomRepository.findByEventRoomID("Eventtest-ID").get());

    }

    @Test
    void createMovie() {
        movie = new Movie("Movietest2-ID", "Name", "Genre", 164, "Image", "Description");
        createEntities.createMovie(movie);
        assertEquals(movie, movieRepository.findByMovieId("Movietest2-ID").get());
    }



    @Test
    void getCinema() {
        cinema = new Cinema("Cinematest-ID", "Country","State","City", "Street", 123,4567,"Mail","PhoneNumber");
        assertEquals(cinema, createEntities.getCinema("Cinematest-ID"));

    }

    @Test
    void getEventRoom() {
        cinema = cinemaRepository.findByCinemaID("Cinematest-ID").get();
        eventRoom = new EventRoom("Eventtest-ID","ScreenSize", cinema);
        assertEquals(eventRoom, createEntities.getEventRoom("Eventtest-ID"));
    }

    @Test
    void getSeatsPerRoom() {
        eventRoom = eventRoomRepository.findByEventRoomID("Eventtest-ID").get();


        seat1 = new Seat("Eventtest-IDA1", eventRoom, 'A', 1, false);
        seat2 = new Seat("Eventtest-IDA2", eventRoom, 'A', 2, false);
        seat3 = new Seat("Eventtest-IDA3", eventRoom, 'A', 3, false);
        seat4 = new Seat("Eventtest-IDA4", eventRoom, 'A', 4, false);
        seat5 = new Seat("Eventtest-IDA5", eventRoom, 'A', 5, false);
        seat6 = new Seat("Eventtest-IDA6", eventRoom, 'A', 6, false);
        seat7 = new Seat("Eventtest-IDB1", eventRoom, 'B', 1, false);
        seat8 = new Seat("Eventtest-IDB2", eventRoom, 'B', 2, false);
        seat9 = new Seat("Eventtest-IDB3", eventRoom, 'B', 3, false);
        seat10 = new Seat("Eventtest-IDB4", eventRoom, 'B', 4, false);
        seat11 = new Seat("Eventtest-IDB5", eventRoom, 'B', 5, false);
        seat12 = new Seat("Eventtest-IDB6", eventRoom, 'B', 6, false);
        seat13 = new Seat("Eventtest-IDC1", eventRoom, 'C', 1, false);
        seat14 = new Seat("Eventtest-IDC2", eventRoom, 'C', 2, false);
        seat15 = new Seat("Eventtest-IDC3", eventRoom, 'C', 3, false);
        seat16 = new Seat("Eventtest-IDC4", eventRoom, 'C', 4, false);
        seat17 = new Seat("Eventtest-IDC5", eventRoom, 'C', 5, false);
        seat18 = new Seat("Eventtest-IDC6", eventRoom, 'C', 6, false);
        seat19 = new Seat("Eventtest-IDD1", eventRoom, 'D', 1, false);
        seat20 = new Seat("Eventtest-IDD2", eventRoom, 'D', 2, false);
        seat21 = new Seat("Eventtest-IDD3", eventRoom, 'D', 3, false);
        seat22 = new Seat("Eventtest-IDD4", eventRoom, 'D', 4, false);
        seat23 = new Seat("Eventtest-IDD5", eventRoom, 'D', 5, false);
        seat24 = new Seat("Eventtest-IDD6", eventRoom, 'D', 6, false);

        seats = new ArrayList<>();
        seats.add(seat1);
        seats.add(seat2);
        seats.add(seat3);
        seats.add(seat4);
        seats.add(seat5);
        seats.add(seat6);
        seats.add(seat7);
        seats.add(seat8);
        seats.add(seat9);
        seats.add(seat10);
        seats.add(seat11);
        seats.add(seat12);
        seats.add(seat13);
        seats.add(seat14);
        seats.add(seat15);
        seats.add(seat16);
        seats.add(seat17);
        seats.add(seat18);
        seats.add(seat19);
        seats.add(seat20);
        seats.add(seat21);
        seats.add(seat22);
        seats.add(seat23);
        seats.add(seat24);

        assertEquals(seats, createEntities.getSeatsPerRoom("Eventtest-ID"));

    }

    @Test
    void createSeatingTemplate() {
        seatMod = new SeatMod(8,false);
        seatMap = new HashMap<>();
        seatMap.put("Eventtest-IDA1", seatMod);
        seatMap.put("Eventtest-IDA2", seatMod);
        seatMap.put("Eventtest-IDA3", seatMod);
        seatMap.put("Eventtest-IDA4", seatMod);
        seatMap.put("Eventtest-IDA5", seatMod);
        seatMap.put("Eventtest-IDA6", seatMod);
        seatMap.put("Eventtest-IDB1", seatMod);
        seatMap.put("Eventtest-IDB2", seatMod);
        seatMap.put("Eventtest-IDB3", seatMod);
        seatMap.put("Eventtest-IDB4", seatMod);
        seatMap.put("Eventtest-IDB5", seatMod);
        seatMap.put("Eventtest-IDB6", seatMod);
        seatMap.put("Eventtest-IDC1", seatMod);
        seatMap.put("Eventtest-IDC2", seatMod);
        seatMap.put("Eventtest-IDC3", seatMod);
        seatMap.put("Eventtest-IDC4", seatMod);
        seatMap.put("Eventtest-IDC5", seatMod);
        seatMap.put("Eventtest-IDC6", seatMod);
        seatMap.put("Eventtest-IDD1", seatMod);
        seatMap.put("Eventtest-IDD2", seatMod);
        seatMap.put("Eventtest-IDD3", seatMod);
        seatMap.put("Eventtest-IDD4", seatMod);
        seatMap.put("Eventtest-IDD5", seatMod);
        seatMap.put("Eventtest-IDD6", seatMod);

        seatingTemplate = new SeatingTemplate("Eventtest-IDTemplate2021-11-11T19:26:06.819991700", "Eventtest-ID", seatMap);
        assertEquals(seatingTemplate, seatingTemplateRepository.findBySeatingTemplateID("Eventtest-IDTemplate2021-11-11T19:26:06.819991700").get());


    }

    @Test
    void createShowEvent() {
        seatingTemplate = seatingTemplateRepository.findBySeatingTemplateID("Eventtest-IDTemplate2021-11-11T19:26:06.819991700").get();
        eventStart = LocalDateTime.of(2021,12,31,00,00);
        movie = new Movie("Movietest-ID", "Name", "Genre", 164, "Image", "Description");
        showEvent = new ShowEvent("Showevent-ID", movie, seatingTemplate, eventStart, true, false );

        createEntities.createShowEvent("Showevent-ID","Movietest-ID", "Eventtest-IDTemplate2021-11-11T19:26:06.819991700", eventStart, true, false);
        assertEquals(showEvent, showEventRepository.findByShowEventID("Showevent-ID").get());

    }


}