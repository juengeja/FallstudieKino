package com.example.kinoticketreservierungssystem.repository;

import com.azure.spring.data.cosmos.repository.CosmosRepository;
import com.azure.spring.data.cosmos.repository.ReactiveCosmosRepository;
import com.example.kinoticketreservierungssystem.entity.Cinema;
import com.example.kinoticketreservierungssystem.entity.EventRoom;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

import java.io.DataInput;
import java.io.IOException;
import java.util.Optional;

@Repository
public interface EventRoomRepository extends CosmosRepository<EventRoom, String> {


   Optional<EventRoom> findByEventRoomID(String eventRoomID);
   Iterable<EventRoom> findAllByCinemaInfo(Cinema cinema);
}

