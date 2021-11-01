package com.example.kinoticketreservierungssystem.repository;

import com.azure.spring.data.cosmos.repository.CosmosRepository;
import com.azure.spring.data.cosmos.repository.ReactiveCosmosRepository;
import com.example.kinoticketreservierungssystem.entity.Coupon;
import org.springframework.stereotype.Repository;

@Repository
public interface CouponRepository extends CosmosRepository<Coupon, String> {

}
