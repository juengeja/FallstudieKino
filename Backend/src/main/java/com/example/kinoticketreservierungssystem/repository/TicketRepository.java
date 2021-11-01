package com.example.kinoticketreservierungssystem.repository;

import com.azure.spring.data.cosmos.repository.CosmosRepository;
import com.example.kinoticketreservierungssystem.entity.Admin;
import com.example.kinoticketreservierungssystem.entity.Ticket;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TicketRepository extends CosmosRepository<Ticket, String> {
Optional<Ticket> findByTicketID(String ticketID);
Iterable<Ticket> findAllByReservationID(String ReservationID);
}
