package com.example.kinoticketreservierungssystem.service;


import com.example.kinoticketreservierungssystem.entity.EventRoom;
import com.example.kinoticketreservierungssystem.entity.SeatingTemplate;
import com.example.kinoticketreservierungssystem.repository.CinemaRepository;
import com.example.kinoticketreservierungssystem.repository.EventRoomRepository;
import com.example.kinoticketreservierungssystem.repository.SeatingTemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class DropdownSelection {

    @Autowired
    SeatingTemplateRepository seatingTemplateRepository;
    @Autowired
    CinemaRepository cinemaRepository;
    @Autowired
    EventRoomRepository eventRoomRepository;


    public Set<SeatingTemplate> getAllSeatingTemplates(String cinema){
        Set<SeatingTemplate> seatingTemplates = new HashSet<>();
        Set<EventRoom> eventRooms = new HashSet<>();
        eventRoomRepository.findAllByCinemaInfo(cinemaRepository.findById(cinema).get()).forEach(eventRooms::add);
        for(EventRoom eventRoom: eventRooms){
        seatingTemplates.add(seatingTemplateRepository.findByEventRoomID(eventRoom.getEventRoomID()).get());
        }
        return seatingTemplates;
    }

}
