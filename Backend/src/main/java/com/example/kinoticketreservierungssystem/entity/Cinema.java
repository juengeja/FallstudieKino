package com.example.kinoticketreservierungssystem.entity;

public class Cinema {

    private int cinemaID;
    private int numberOfAuditoriums;
    private String street;
    private int houseNumber;
    private int plz;
    private String email;
    private String phoneNumber;

    public int getCinemaID() {
        return cinemaID;
    }

    public void setCinemaID(int cinemaID) {
        this.cinemaID = cinemaID;
    }

    public int getNumberOfAuditoriums() {
        return numberOfAuditoriums;
    }

    public void setNumberOfAuditoriums(int numberOfAuditoriums) {
        this.numberOfAuditoriums = numberOfAuditoriums;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(int houseNumber) {
        this.houseNumber = houseNumber;
    }

    public int getPlz() {
        return plz;
    }

    public void setPlz(int plz) {
        this.plz = plz;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
