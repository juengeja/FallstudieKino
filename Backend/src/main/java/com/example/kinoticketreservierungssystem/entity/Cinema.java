package com.example.kinoticketreservierungssystem.entity;


import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.google.gson.Gson;
import org.springframework.data.annotation.Id;


@Container(containerName = "Cinemas")
public class Cinema {
    @Id
    private String cinemaID;
    private String country;
    @PartitionKey
    private String state;
    private String city;
    private String street;
    private int houseNumber;
    private int postalNumber;
    private String businessEmail;
    private String businessPhoneNumber;

    public Cinema(String cinemaID, String country, String state, String city, String street, int houseNumber, int postalNumber, String businessEmail, String businessPhoneNumber) {
        this.cinemaID = cinemaID;
        this.country = country;
        this.state = state;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
        this.postalNumber = postalNumber;
        this.businessEmail = businessEmail;
        this.businessPhoneNumber = businessPhoneNumber;
    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this, Cinema.class);
    }


    public String getCinemaID() {
        return cinemaID;
    }

    public void setCinemaID(String cinemaID) {
        this.cinemaID = cinemaID;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
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

    public int getPostalNumber() {
        return postalNumber;
    }

    public void setPostalNumber(int postalNumber) {
        this.postalNumber = postalNumber;
    }

    public String getBusinessEmail() {
        return businessEmail;
    }

    public void setBusinessEmail(String businessEmail) {
        this.businessEmail = businessEmail;
    }

    public String getBusinessPhoneNumber() {
        return businessPhoneNumber;
    }

    public void setBusinessPhoneNumber(String businessPhoneNumber) {
        this.businessPhoneNumber = businessPhoneNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Cinema cinema = (Cinema) o;

        if (!cinemaID.equals(cinema.cinemaID)) return false;
        return state.equals(cinema.state);
    }

    @Override
    public int hashCode() {
        int result = cinemaID.hashCode();
        result = 31 * result + state.hashCode();
        return result;
    }
}