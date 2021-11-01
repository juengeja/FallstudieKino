package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.blSupport.SeatMod;
import com.example.kinoticketreservierungssystem.entity.ShowEvent;
import com.example.kinoticketreservierungssystem.repository.SeatingTemplateRepository;
import com.example.kinoticketreservierungssystem.repository.ShowEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.Set;

@Service
public class SeatingPlan {

    @Autowired
    ShowEventRepository showEventRepository;
    @Autowired
    SeatingTemplateRepository seatingTemplateRepository;
    @Autowired
    SeatingPlan seatingPlan;


    public ShowEvent selectSeats(Set<String> seats, ShowEvent showEvent){
        Map<String, SeatMod> selectSeatingPlanMap = showEvent.getSeatingTemplateInfo().getSeatMap();
        for(String seat : seats){
            selectSeatingPlanMap.get(seat).setBooked(true);
            showEvent.getSeatingTemplateInfo().setSeatMap(selectSeatingPlanMap);}
            return showEventRepository.save(showEvent);
    }


    public ShowEvent deselectSeats(Set<String> seats, ShowEvent showEvent){
        Map<String, SeatMod> deselectSeatingPlanMap = showEvent.getSeatingTemplateInfo().getSeatMap();
        for(String seat : seats){
            deselectSeatingPlanMap.get(seat).setBooked(false);
            showEvent.getSeatingTemplateInfo().setSeatMap(deselectSeatingPlanMap);}
            return showEventRepository.save(showEvent);
    }
}
