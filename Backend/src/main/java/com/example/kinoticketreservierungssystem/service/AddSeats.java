package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.entity.EventRoom;
import com.example.kinoticketreservierungssystem.entity.Seat;
import com.example.kinoticketreservierungssystem.repository.SeatRepository;
import com.example.kinoticketreservierungssystem.repository.ShowEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AddSeats {

    @Autowired
    SeatRepository seatRepository;


    public List<Seat> addSeats(EventRoom eventRoom, int amtRows, int amtSeatNumbers){
        char rows[] = {'C','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'};
        String eventRoomID = eventRoom.getEventRoomID();
        List<Seat> seats = new ArrayList<>();
        for (int a = 0; a < amtRows; a++){
            char currentRow = rows[a];
            for (int b = 1; b <= amtSeatNumbers; b++){
                Seat addedSeat = new Seat((eventRoomID+currentRow+b).toString(), eventRoom, currentRow, b, false);
                seats.add(addedSeat);
            }
        }
        return seats;
    }

    public void createSeats(List<Seat> seats){
        for(Seat seat:seats){
    seatRepository.save(seat);
        }
    }
}
//A,B,C,D,E,F,G,H,I,J
//15