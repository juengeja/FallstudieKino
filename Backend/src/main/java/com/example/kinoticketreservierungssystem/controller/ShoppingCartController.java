package com.example.kinoticketreservierungssystem.controller;

import com.example.kinoticketreservierungssystem.entity.Booking;
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

    @PutMapping("{reservation}")
    public ResponseEntity<Booking> backUndoReservation (@PathVariable String reservation){
        return new ResponseEntity<Booking>(bookingProcess.removeReservation(reservation), HttpStatus.OK);
    }
}
