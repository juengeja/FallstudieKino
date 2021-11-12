package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.blSupport.Mail;
import com.example.kinoticketreservierungssystem.entity.Booking;
import com.example.kinoticketreservierungssystem.entity.Ticket;
import com.example.kinoticketreservierungssystem.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.Semaphore;

@Service
public class SendMail {

    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    TicketPDF ticketPDF;


    private final JavaMailSender javaMailSender;
    private static Semaphore semaphore;

    public SendMail(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
        semaphore = new Semaphore(1);
    }


    public void sendMail(Mail mail) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(mail.getRecipient(), mail.getRecipient());

        msg.setSubject(mail.getSubject());
        msg.setText(mail.getMessage());

        javaMailSender.send(msg);
    }

    public void ticketEmail(Booking booking) throws MessagingException {
       try {
          semaphore.acquire();

            MimeMessage msg = javaMailSender.createMimeMessage();

            MimeMessageHelper helper = new MimeMessageHelper(msg, true);

            helper.setTo(booking.getCustomerInfo().getEmail());

            helper.setSubject("Indigo BW Movie Tickets");

            helper.setText("Dear " + booking.getCustomerInfo().getFirstName() + ",\n\n" + "we wish you all the best enjoyment for your upcoming movie. Please find the attached tickets.", true);
                Set<Ticket> tickets = new HashSet<>();
                for(String ticket : booking.getTickets()){
                    tickets.add(ticketRepository.findByTicketID(ticket).get());
                }
                File file = ticketPDF.createTicketPDF(tickets, booking.getMenu());
                helper.addAttachment("ticket.pdf", file);
            javaMailSender.send(msg);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            semaphore.release();
        }
    }
}

