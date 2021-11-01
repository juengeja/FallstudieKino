package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.entity.Admin;
import com.example.kinoticketreservierungssystem.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CheckAdmin {

    @Autowired
    AdminRepository adminRepository;

    public Admin checkAdmin(Admin admin){
        Optional<Admin> adminUser = adminRepository.findByUsername(admin.getUsername());
        Optional<Admin> adminPW = adminRepository.findByPassword(admin.getPassword());

        if(adminUser != null && adminUser.equals(adminPW)){
            return adminUser.get();
        }else{
        admin.setSuccessful(false);
        return admin;}
}}
