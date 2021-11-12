package com.example.kinoticketreservierungssystem.controller;

import com.example.kinoticketreservierungssystem.entity.Booking;
import com.example.kinoticketreservierungssystem.entity.Menu;
import com.example.kinoticketreservierungssystem.entity.Movie;
import com.example.kinoticketreservierungssystem.repository.BookingRepository;
import com.example.kinoticketreservierungssystem.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RequestMapping(value = "/menu")
@RestController
@CrossOrigin(origins = "*")
public class MenuController {

@Autowired
MenuRepository menuRepository;
@Autowired
BookingRepository bookingRepository;

    @PutMapping()
    public ResponseEntity<Booking> frontSelectMenu(@RequestBody Booking booking){
        Menu menu = menuRepository.findById(booking.getMenu()).get();
        booking.setTotalPrice(booking.getTotalPrice()+menu.getPrice());
        return new ResponseEntity<>(bookingRepository.save(booking), HttpStatus.OK);
    }
}
