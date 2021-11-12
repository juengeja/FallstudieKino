package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.entity.Admin;
import com.example.kinoticketreservierungssystem.repository.AdminRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CheckAdminTest {

    @Autowired
    AdminRepository adminRepository;
    @Autowired
    CheckAdmin checkAdminC;
    Admin admin;
    Admin admin2;

    @Test
    void checkAdmin() {
        admin = new Admin("Admintest-ID", "Username", "Passwort");
        adminRepository.save(admin);
        checkAdminC.checkAdmin(admin);
        assertTrue(adminRepository.findByUsername("Username").get().isSuccessful());

    }
}