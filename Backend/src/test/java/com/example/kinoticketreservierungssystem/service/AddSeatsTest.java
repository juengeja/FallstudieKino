package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.entity.Cinema;
import com.example.kinoticketreservierungssystem.entity.EventRoom;
import com.example.kinoticketreservierungssystem.entity.Seat;
import com.example.kinoticketreservierungssystem.repository.CinemaRepository;
import com.example.kinoticketreservierungssystem.repository.EventRoomRepository;
import com.example.kinoticketreservierungssystem.repository.SeatRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AddSeatsTest {

    @Autowired
    SeatRepository seatRepository;
    @Autowired
    CinemaRepository cinemaRepository;
    @Autowired
    EventRoomRepository eventRoomRepository;
    @Autowired
    AddSeats addSeatsC;

    EventRoom eventRoom;
    Cinema cinemaInfo;

    List<Seat> seats;
    // A
    Seat seat1;
    Seat seat2;
    Seat seat3;
    Seat seat4;
    Seat seat5;
    Seat seat6;
    //B
    Seat seat7;
    Seat seat8;
    Seat seat9;
    Seat seat10;
    Seat seat11;
    Seat seat12;
    //C
    Seat seat13;
    Seat seat14;
    Seat seat15;
    Seat seat16;
    Seat seat17;
    Seat seat18;
    //D
    Seat seat19;
    Seat seat20;
    Seat seat21;
    Seat seat22;
    Seat seat23;
    Seat seat24;

    Seat specificSeat;

    @Test
    void addSeats() {

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

        assertEquals(seats, addSeatsC.addSeats(eventRoom, 4, 6));

    }

    @Test
    void createSeats() {

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



        specificSeat = new Seat("Eventtest-IDA1", eventRoom, 'A', 1, false);

        addSeatsC.createSeats(seats);
        assertEquals(specificSeat, seatRepository.findBySeatID("Eventtest-IDA1").get());

    }

}