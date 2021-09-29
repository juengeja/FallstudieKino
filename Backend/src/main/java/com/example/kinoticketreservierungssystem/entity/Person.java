package com.example.kinoticketreservierungssystem.entity;

import java.text.DateFormat;

public class Person {

    private String lastName;
    private String firstName;
    private DateFormat dateOfBirth;
    private int phoneNumber;

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public DateFormat getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(DateFormat dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
