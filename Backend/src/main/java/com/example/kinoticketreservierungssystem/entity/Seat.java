package com.example.kinoticketreservierungssystem.entity;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import com.google.gson.Gson;
import org.springframework.data.annotation.Id;


@Container(containerName = "Seats")
public class Seat {
    // seatID naming convention: EventRoomID + Row + SeatNumber
    @Id
    private String seatID;
    private EventRoom eventRoomInfo;
    // row naming convention: A,B,C,D...
    @PartitionKey
    private char row;
    private int seatNumber;
    private boolean available;

    public Seat(String seatID, EventRoom eventRoomInfo, char row, int seatNumber, boolean booked) {
        this.seatID = seatID;
        this.eventRoomInfo = eventRoomInfo;
        this.row = row;
        this.seatNumber = seatNumber;
        this.available = booked;
    }

    public Seat() {

    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this, Seat.class);
    }

    public String getSeatID() {
        return seatID;
    }

    public void setSeatID(String seatID) {
        this.seatID = seatID;
    }

    public EventRoom getEventRoomInfo() {
        return eventRoomInfo;
    }

    public void setEventRoomInfo(EventRoom eventRoomInfo) {
        this.eventRoomInfo = eventRoomInfo;
    }

    public char getRow() {
        return row;
    }

    public void setRow(char row) {
        this.row = row;
    }

    public int getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(int seatNumber) {
        this.seatNumber = seatNumber;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Seat seat = (Seat) o;

        if (row != seat.row) return false;
        return seatID.equals(seat.seatID);
    }

    @Override
    public int hashCode() {
        int result = seatID.hashCode();
        result = 31 * result + (int) row;
        return result;
    }
}
