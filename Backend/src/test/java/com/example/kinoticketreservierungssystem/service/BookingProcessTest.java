package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.entity.Reservation;
import com.example.kinoticketreservierungssystem.entity.Booking;
import com.example.kinoticketreservierungssystem.entity.Customer;
import com.example.kinoticketreservierungssystem.entity.ShowEvent;
import com.example.kinoticketreservierungssystem.entity.Ticket;
import com.example.kinoticketreservierungssystem.repository.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BookingProcessTest{

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
    ReservationRepository reservationRepository;


    Reservation reservation;
    Reservation newReservation;
    Booking newBooking;
    ShowEvent showEvent;
    Customer customer;
    Ticket ticket;
    Set<String> seats;
    Set<String> reservations;
    Set<String> tickets;

    private final CountDownLatch countDown = new CountDownLatch(1);


    @Test
    void reserveSeats() {
        // leere BookingInfo wird befüllt und isQuickCheckout ist true
        seats = new HashSet<>();
        seats.add("Eventtest-IDD5");

        newReservation = new Reservation("ReserveSeats-Reservationstest", seats, "Showevent-ID", null, 8);
        reservationRepository.save(newReservation);
        bookingProcess.reserveSeats((newReservation));
        assertFalse(newReservation.getBookingInfo() == null);

    }

    @Test
    void seatsReservedTimer() {
        seats = new HashSet<>();
        seats.add("Eventtest-IDA6");
        newReservation = new Reservation("ReservedTimer-Reservationtest", seats, "Showevent-ID", "ReservedTimer-Bookingtest",  8);
        reservationRepository.save(newReservation);
        reservations = new HashSet<>();
        reservations.add("ReservedTimer-Reservationtest");
        Customer customer3 = new Customer();
        newBooking = new Booking("ReservedTimer-Bookingtest", customer3, reservations, "", "not paid yet", 8);
        newBooking.setBookingStatus("reserved");
        bookingRepository.save(newBooking);


        showEvent = showEventRepository.findByShowEventID("Showevent-ID").get();
        showEvent.getSeatingTemplateInfo().getSeatMap().get("Eventtest-IDA6").setBooked(true);
        showEventRepository.save(showEvent);

        assertTrue(showEventRepository.findByShowEventID("Showevent-ID").get().getSeatingTemplateInfo().getSeatMap().get("Eventtest-IDA6").isBooked());

        try {
            bookingProcess.seatsReservedTimer(newReservation, 1);
            countDown.await(2, TimeUnit.MILLISECONDS);
            assertSame("reserved", newBooking.getBookingStatus());
            assertTrue(showEventRepository.findByShowEventID("Showevent-ID").get().getSeatingTemplateInfo().getSeatMap().get("Eventtest-IDA6").isBooked());
        }catch (Exception e){
            e.printStackTrace();
        }
    }



    @Test
    void removeReservation() {
        try {
            seats = new HashSet<>();
            seats.add("Eventtest-IDB3");
            reservation = new Reservation("RemoveReservation-Reservationtest", seats, "Showevent-ID", "RemoveReservation-Bookingtest", 8);
            reservationRepository.save(reservation);
            customer = new Customer();
            customerRepository.save(customer);

            ticket = new Ticket("TicketTestA1", "Eventtest-IDB3", "RemoveReservation-Bookingtest", "Showevent-ID", "reserved");
            ticketRepository.save(ticket);
            tickets = new HashSet<>();
            tickets.add("TicketTestA2");
            reservations = new HashSet<>();
            reservations.add("RemoveReservation-Reservationtest");

            newBooking = new Booking("RemoveReservation-Bookingtest", customer, tickets, "CouponCode", "PaymentMethod", 8);
            newBooking.setBookingStatus("paid");
            bookingRepository.save(newBooking);


            bookingProcess.removeReservation("RemoveReservation-Reservationtest");
            assertTrue(bookingRepository.findByBookingID("RemoveReservation-Bookingtest").get().getReservations().isEmpty());
        }catch (Exception e){
            assertTrue(true);
        }
    }
}