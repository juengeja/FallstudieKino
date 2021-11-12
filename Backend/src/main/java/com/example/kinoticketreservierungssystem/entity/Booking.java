package com.example.kinoticketreservierungssystem.entity;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import com.google.gson.Gson;
import org.springframework.data.annotation.Id;

import java.util.Set;

@Container(containerName = "Bookings")
public class Booking {
    @Id
    private String bookingID;
    private Customer customerInfo;
    @PartitionKey
    private boolean quickCheckout;
    private Set<Reservation> reservations;
    private Set<String> tickets;
    private String bookingStatus;
    private String couponCode;
    private String paymentMethod = "not paid yet";
    private String menu;
    private double totalPrice;

    public Booking(String bookingID, Customer customerInfo, Set<String> ticketInfo, String couponCode, String paymentMethod, double totalPrice) {
        this.bookingID = bookingID;
        this.customerInfo = customerInfo;
        this.tickets = ticketInfo;
        this.couponCode = couponCode;
        this.paymentMethod = paymentMethod;
        this.totalPrice = totalPrice;
    }

    public Booking(String bookingID, boolean quickCheckout) {
        this.bookingID = bookingID;
        this.quickCheckout = quickCheckout;
    }

    public Booking() {
    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this, Booking.class);
    }

    public String getBookingID() {
        return bookingID;
    }

    public void setBookingID(String bookingID) {
        this.bookingID = bookingID;
    }

    public Customer getCustomerInfo() {
        return customerInfo;
    }

    public void setCustomerInfo(Customer customerInfo) {
        this.customerInfo = customerInfo;
    }

    public Set<String> getTickets() {
        return tickets;
    }

    public void setTickets(Set<String> tickets) {
        this.tickets = tickets;
    }

    public String getCouponCode() {
        return couponCode;
    }

    public void setCouponCode(String couponCode) {
        this.couponCode = couponCode;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public Set<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(Set<Reservation> reservations) {
        this.reservations = reservations;
    }

    public boolean isQuickCheckout() {
        return quickCheckout;
    }

    public void setQuickCheckout(boolean quickCheckout) {
        this.quickCheckout = quickCheckout;
    }

    public String getMenu() {
        return menu;
    }

    public void setMenu(String menu) {
        this.menu = menu;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Booking booking = (Booking) o;

        if (quickCheckout != booking.quickCheckout) return false;
        return bookingID.equals(booking.bookingID);
    }

    @Override
    public int hashCode() {
        int result = bookingID.hashCode();
        result = 31 * result + (quickCheckout ? 1 : 0);
        return result;
    }
}
