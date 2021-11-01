package com.example.kinoticketreservierungssystem.controller;

import com.example.kinoticketreservierungssystem.entity.Admin;
import com.example.kinoticketreservierungssystem.repository.AdminRepository;
import com.example.kinoticketreservierungssystem.service.CheckAdmin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping(value = "/login")
@RestController
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    AdminRepository adminRepository;
    @Autowired
    CheckAdmin checkAdmin;

    @PutMapping
    public ResponseEntity<Admin> frontCheckAdmin(@RequestBody Admin admin){
        return new ResponseEntity<Admin>(checkAdmin.checkAdmin(admin), HttpStatus.OK);
    }
}
