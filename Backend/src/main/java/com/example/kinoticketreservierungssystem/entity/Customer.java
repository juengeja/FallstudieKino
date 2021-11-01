package com.example.kinoticketreservierungssystem.entity;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import com.google.gson.Gson;
import org.springframework.data.annotation.Id;
import java.time.LocalDate;

@Container(containerName = "Customers")
public class Customer{
    @Id
    private String customerID;
    private String lastName;
    private String firstName;
    private LocalDate dateOfBirth;
    private String email;
    private String phoneNumber;
    @PartitionKey
    private boolean user;
    private String username;
    private String password;

    public Customer(String customerID, String lastName, String firstName, LocalDate dateOfBirth, String email, String phoneNumber, boolean user, String username, String password) {
        this.customerID = customerID;
        this.lastName = lastName;
        this.firstName = firstName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.user = user;
        this.username = username;
        this.password = password;
    }

    public Customer(String customerID, String lastName, String firstName, LocalDate dateOfBirth, String email, String phoneNumber, boolean user) {
        this.customerID = customerID;
        this.lastName = lastName;
        this.firstName = firstName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.user = user;
    }

    public Customer() {

    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this, Customer.class);
    }

    public String getCustomerID() {
        return customerID;
    }

    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }

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

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
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

    public boolean isUser() {
        return user;
    }

    public void setUser(boolean user) {
        this.user = user;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Customer customer = (Customer) o;

        if (user != customer.user) return false;
        return customerID.equals(customer.customerID);
    }

    @Override
    public int hashCode() {
        int result = customerID.hashCode();
        result = 31 * result + (user ? 1 : 0);
        return result;
    }
}
