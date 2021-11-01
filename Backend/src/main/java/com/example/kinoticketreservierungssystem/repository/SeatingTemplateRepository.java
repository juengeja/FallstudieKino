package com.example.kinoticketreservierungssystem.repository;

import com.azure.spring.data.cosmos.repository.CosmosRepository;
import com.azure.spring.data.cosmos.repository.ReactiveCosmosRepository;
import com.example.kinoticketreservierungssystem.entity.SeatingTemplate;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

import java.util.Optional;

@Repository
public interface SeatingTemplateRepository extends CosmosRepository<SeatingTemplate, String> {
    Optional<SeatingTemplate> findBySeatingTemplateID(String seatingTemplateID);
    Iterable<SeatingTemplate> findAll();
    Optional<SeatingTemplate> findByEventRoomID(String eventRoomID);
}
