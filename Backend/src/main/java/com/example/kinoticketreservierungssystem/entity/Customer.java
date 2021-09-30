package com.example.kinoticketreservierungssystem.entity;

public class Customer extends Person{

    private int customerID;
    private String email;

    public int getCustomerID() {
        return customerID;
    }

    public void setCustomerID(int customerID) {
        this.customerID = customerID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
