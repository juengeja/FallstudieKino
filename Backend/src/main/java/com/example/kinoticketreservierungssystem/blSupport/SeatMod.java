package com.example.kinoticketreservierungssystem.blSupport;

import com.google.gson.Gson;

public class SeatMod {
    private double price;
    private boolean booked = false;

    public SeatMod(double price, boolean booked) {
        this.price = price;
        this.booked = booked;
    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this, SeatMod.class);
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean isBooked() {
        return booked;
    }

    public void setBooked(boolean booked) {
        this.booked = booked;
    }
}
