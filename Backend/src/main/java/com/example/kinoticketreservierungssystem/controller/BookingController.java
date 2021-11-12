package com.example.kinoticketreservierungssystem.controller;

import com.example.kinoticketreservierungssystem.entity.Reservation;
import com.example.kinoticketreservierungssystem.entity.*;
import com.example.kinoticketreservierungssystem.repository.*;
import com.example.kinoticketreservierungssystem.service.BookingProcess;
import com.example.kinoticketreservierungssystem.service.SeatingPlan;
import com.example.kinoticketreservierungssystem.service.SendMail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

@RequestMapping(value = "/reservation")
@RestController
@CrossOrigin(origins = "*")
public class BookingController {


    @Autowired
    BookingProcess bookingProcess;
    @Autowired
    ShowEventRepository showEventRepository;
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    SeatingPlan seatingPlan;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    SendMail sendMail;
    @Autowired
    MenuRepository menuRepository;

    @PostMapping
    public ResponseEntity<Booking> seatsReserved(@RequestBody Reservation reservation){
        return new ResponseEntity<>(bookingProcess.reserveSeats(reservation), HttpStatus.OK);
    }

    @PutMapping("/successfulpayment")
    public ResponseEntity<Booking> seatsBooked(@RequestBody Booking booking) throws MessagingException {
        Booking bookedSeats = bookingProcess.bookSeats(booking);
        if(!bookedSeats.getBookingStatus().equals("denied")){
            bookedSeats.setBookingStatus("paid");
            bookingRepository.save(bookedSeats);    
            sendMail.ticketEmail(bookedSeats);
        }
        return new ResponseEntity<>(bookedSeats, HttpStatus.OK);
    }
}
