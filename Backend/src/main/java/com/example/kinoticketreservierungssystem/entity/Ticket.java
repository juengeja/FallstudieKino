package com.example.kinoticketreservierungssystem.entity;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import com.google.gson.Gson;
import org.springframework.data.annotation.Id;

@Container(containerName = "Tickets")
public class Ticket {
    @Id
    private String ticketID;
    @PartitionKey
    private String seatInfo;
    private String reservationID;
    private String showEventInfo;
    //after successful reservation: "reserved", after successful payment: "booked", after validation: "validated"/after expiration: "expired"
    private String ticketStatus;

    public Ticket(String ticketID, String seatInfo, String reservationID, String showEventInfo, String ticketStatus) {
        this.ticketID = ticketID;
        this.seatInfo = seatInfo;
        this.reservationID = reservationID;
        this.showEventInfo = showEventInfo;
        this.ticketStatus = ticketStatus;
    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this, Ticket.class);
    }

    public String getTicketID() {
        return ticketID;
    }

    public void setTicketID(String ticketID) {
        this.ticketID = ticketID;
    }

    public String getSeatInfo() {
        return seatInfo;
    }

    public void setSeatInfo(String seatInfo) {
        this.seatInfo = seatInfo;
    }

    public String getShowEventInfo() {
        return showEventInfo;
    }

    public void setShowEventInfo(String showEventInfo) {
        this.showEventInfo = showEventInfo;
    }

    public String getTicketStatus() {
        return ticketStatus;
    }

    public void setTicketStatus(String ticketStatus) {
        this.ticketStatus = ticketStatus;
    }

    public String getReservationID() {
        return reservationID;
    }

    public void setReservationID(String reservationID) {
        this.reservationID = reservationID;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Ticket ticket = (Ticket) o;

        if (!ticketID.equals(ticket.ticketID)) return false;
        return seatInfo.equals(ticket.seatInfo);
    }

    @Override
    public int hashCode() {
        int result = ticketID.hashCode();
        result = 31 * result + seatInfo.hashCode();
        return result;
    }
}
