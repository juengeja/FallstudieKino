package com.example.kinoticketreservierungssystem.entity;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
import java.util.Set;

@Container(containerName = "Reservation")
public class Reservation {
    @Id
    private String reservationID;
    private Set<String> seats;
    @PartitionKey
    private String showEventInfo;
    private String movieName;
    private String moviePoster;
    private LocalDateTime eventStart;
    private boolean quickCheckout;
    private String bookingInfo;
    private double totalAmount;

    public Reservation(String reservationID, Set<String> seats, String showEventInfo, String bookingInfo, double totalAmount) {
        this.reservationID = reservationID;
        this.seats = seats;
        this.showEventInfo = showEventInfo;
        this.bookingInfo = bookingInfo;
        this.totalAmount = totalAmount;
    }

    public Reservation() {

    }

    public String getReservationID() {
        return reservationID;
    }

    public void setReservationID(String reservationID) {
        this.reservationID = reservationID;
    }

    public Set<String> getSeats() {
        return seats;
    }

    public void setSeats(Set<String> seats) {
        this.seats = seats;
    }

    public String getShowEventInfo() {
        return showEventInfo;
    }

    public void setShowEventInfo(String showEventInfo) {
        this.showEventInfo = showEventInfo;
    }

    public String getBookingInfo() {
        return bookingInfo;
    }

    public void setBookingInfo(String bookingInfo) {
        this.bookingInfo = bookingInfo;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public boolean isQuickCheckout() {
        return quickCheckout;
    }

    public void setQuickCheckout(boolean quickCheckout) {
        this.quickCheckout = quickCheckout;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getMoviePoster() {
        return moviePoster;
    }

    public void setMoviePoster(String moviePoster) {
        this.moviePoster = moviePoster;
    }

    public LocalDateTime getEventStart() {
        return eventStart;
    }

    public void setEventStart(LocalDateTime eventStart) {
        this.eventStart = eventStart;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Reservation that = (Reservation) o;

        if (!reservationID.equals(that.reservationID)) return false;
        return showEventInfo.equals(that.showEventInfo);
    }

    @Override
    public int hashCode() {
        int result = reservationID.hashCode();
        result = 31 * result + showEventInfo.hashCode();
        return result;
    }
}
