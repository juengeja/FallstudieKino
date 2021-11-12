package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.blSupport.Mail;
import com.example.kinoticketreservierungssystem.entity.Booking;
import com.example.kinoticketreservierungssystem.entity.Customer;
import com.example.kinoticketreservierungssystem.repository.BookingRepository;
import com.example.kinoticketreservierungssystem.repository.CustomerRepository;
import com.example.kinoticketreservierungssystem.repository.TicketRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.*;



@SpringBootTest
class SendMailTest {

    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    TicketPDF ticketPDF;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    SendMail sendMailC;
    @Autowired
    BookingRepository bookingRepository;

    SimpleMailMessage simpleMailMessage;
    Mail mail;
    Booking booking;
    JavaMailSender testSender;
    Customer customer;
    Set<String> bookingTickets;


    @Test
    void sendMail() {

        mail = new Mail("testRecipient", "testSubject", "testMessage");

        assertEquals("testMessage", mail.getMessage());
        assertEquals("testRecipient", mail.getRecipient());
        assertEquals("testSubject", mail.getSubject());

    }

    @Test
    void ticketEmail() {
        bookingTickets = new HashSet<>();
        bookingTickets.add("TestTicketA2");
        customer = customerRepository.findById("Costumertest2-ID").get();
        booking = new Booking("CreateTicketPDF-Bookingtest", customer, bookingTickets, "couponCode", "paymentMethod", 8);
       try {
           sendMailC.ticketEmail(booking);
       }catch (Exception e){
           e.printStackTrace();
       }
       assertFalse(bookingRepository.findByBookingID("CreateTicketPDF-Bookingtest").get().getCustomerInfo().getEmail().isEmpty());
    }
}