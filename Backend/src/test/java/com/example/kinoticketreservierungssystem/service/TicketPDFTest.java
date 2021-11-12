package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.entity.Reservation;
import com.example.kinoticketreservierungssystem.entity.Booking;
import com.example.kinoticketreservierungssystem.entity.Customer;
import com.example.kinoticketreservierungssystem.entity.Ticket;
import com.example.kinoticketreservierungssystem.repository.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class TicketPDFTest {

    @Autowired
    ShowEventRepository showEventRepository;
    @Autowired
    SeatRepository seatRepository;
    @Autowired
    ReservationRepository reservationRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    TicketPDF ticketPDF;

    Reservation reservation;
    Booking booking;
    Customer customer;
    Set<Ticket> tickets;
    Set<String> bookingTickets;
    Set<String> seats;
    Ticket ticket;
    LocalDate birthday;
    @Test
    void createTicketPDF() {
        birthday = LocalDate.of(2000,12,12);
        ticket = new Ticket("TestTicketA2", "Eventtest-IDC3", "CreateTicketPDF-Reservationtest", "Showevent-ID", "reserved");
        ticketRepository.save(ticket);
        seats = new HashSet<>();
        seats.add("Eventtest-IDC3");
        reservation = new Reservation("CreateTicketPDF-Reservationtest", seats, "Showevent-ID", "CreateTicketPDF-Bookingtest", 8);
        reservationRepository.save(reservation);
        customer = new Customer("Costumertest2-ID", "M", "R", birthday, "rebekkamiguez@gmail.com", "123", false);
        customerRepository.save(customer);

        bookingTickets = new HashSet<>();
        bookingTickets.add("TestTicketA2");

        booking = new Booking("CreateTicketPDF-Bookingtest", customer, bookingTickets, "couponCode", "paymentMethod", 8);
        bookingRepository.save(booking);

        tickets = new HashSet<>();
        tickets.add(ticket);

        ticketPDF.createTicketPDF(tickets, "");
        assertFalse(ticketRepository.findByTicketID("TestTicketA2").get().getTicketID().isEmpty());


    }
}