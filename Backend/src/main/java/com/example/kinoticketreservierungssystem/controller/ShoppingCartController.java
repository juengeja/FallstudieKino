package com.example.kinoticketreservierungssystem.controller;

import com.example.kinoticketreservierungssystem.entity.Booking;
import com.example.kinoticketreservierungssystem.entity.Menu;
import com.example.kinoticketreservierungssystem.repository.BookingRepository;
import com.example.kinoticketreservierungssystem.repository.MenuRepository;
import com.example.kinoticketreservierungssystem.service.BookingProcess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping(value = "/remove")
@RestController
@CrossOrigin(origins = "*")
public class ShoppingCartController {

    @Autowired
    BookingProcess bookingProcess;
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    MenuRepository menuRepository;

    @PutMapping("{reservation}")
    public ResponseEntity<Booking> backUndoReservation (@PathVariable String reservation){
        return new ResponseEntity<Booking>(bookingProcess.removeReservation(reservation), HttpStatus.OK);
    }

    @PutMapping("/menu")
    public ResponseEntity<Booking> backUndoMenu (@RequestBody Booking booking){
        Menu menu = menuRepository.findById(booking.getMenu()).get();
        booking.setTotalPrice(booking.getTotalPrice()- menu.getPrice());
        booking.setMenu(null);
        return new ResponseEntity<Booking>(bookingRepository.save(booking), HttpStatus.OK);
    }
}
