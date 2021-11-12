package com.example.kinoticketreservierungssystem.repository;

import com.azure.spring.data.cosmos.repository.CosmosRepository;
import com.example.kinoticketreservierungssystem.entity.Menu;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MenuRepository extends CosmosRepository<Menu, String> {

    Optional<Menu> findById(String menuId);

}
