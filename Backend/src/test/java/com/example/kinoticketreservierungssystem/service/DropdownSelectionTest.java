package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.blSupport.SeatMod;
import com.example.kinoticketreservierungssystem.entity.Cinema;
import com.example.kinoticketreservierungssystem.entity.EventRoom;
import com.example.kinoticketreservierungssystem.entity.SeatingTemplate;
import com.example.kinoticketreservierungssystem.repository.CinemaRepository;
import com.example.kinoticketreservierungssystem.repository.EventRoomRepository;
import com.example.kinoticketreservierungssystem.repository.SeatingTemplateRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

// Erstelle eine cinema. Nutze Test cinema Test (in create entities), Set Event Room, und EVEnttest id in das set hinzufügen
// Event erstellen und in das Event Set adden (Hashset), wie reserve seats
//Assert equals set methode mit dem was von der methode aufgerufen wird
//Klasse Cinema erstellen und die Werte aus der Datenbank oder aus Cretae Entity hinzufügen

@SpringBootTest
class DropdownSelectionTest {

    @Autowired
    SeatingTemplateRepository seatingTemplateRepository;
    @Autowired
    CinemaRepository cinemaRepository;
    @Autowired
    EventRoomRepository eventRoomRepository;
    @Autowired
    DropdownSelection dropdownSelection;


    HashSet<EventRoom> eventSet;
    Cinema cinema;
    EventRoom event;
    SeatingTemplate seatingTemp;
    Set<SeatingTemplate> seatingTemplates;
    SeatMod seatMod;
    Map<String, SeatMod> seatMap;


    @Test
    void getAllSeatingTemplates() {

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

        seatingTemp = new SeatingTemplate("Eventtest-IDTemplate2021-11-11T19:26:06.819991700","Eventtest-ID",seatMap);
        seatingTemplates = new HashSet<>();
        seatingTemplates.add(seatingTemp);


        event = new EventRoom("Eventtest-ID","ScreenSize", cinema);
        eventSet = new HashSet<>();
        eventSet.add(event);
        cinema = new Cinema("Cinematest-ID", "Country", "State", "City", "Street", 123,4567, "Mail","PhoneNumber");

        assertEquals(seatingTemplates,dropdownSelection.getAllSeatingTemplates("Cinematest-ID"));


    }
}