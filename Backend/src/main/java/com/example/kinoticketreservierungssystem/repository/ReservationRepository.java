package com.example.kinoticketreservierungssystem.repository;

import com.azure.spring.data.cosmos.repository.CosmosRepository;
import com.example.kinoticketreservierungssystem.blSupport.Reservation;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReservationRepository extends CosmosRepository<Reservation, String> {
    Optional<Reservation> findById(String reservationId);

}
