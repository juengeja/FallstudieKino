package com.example.kinoticketreservierungssystem.entity;

import java.time.LocalDateTime;

public class Showing {

    private int showingID;
    private LocalDateTime showingTime;
    private boolean is3D;
    private boolean hasFreeSeats;

    public int getShowingID() {
        return showingID;
    }

    public void setShowingID(int showingID) {
        this.showingID = showingID;
    }

    public LocalDateTime getShowingTime() {
        return showingTime;
    }

    public void setShowingTime(LocalDateTime showingTime) {
        this.showingTime = showingTime;
    }

    public boolean is3D() {
        return is3D;
    }

    public void setIs3D(boolean is3D) {
        this.is3D = is3D;
    }

    public boolean hasFreeSeats() {
        return hasFreeSeats;
    }

    public void setHasFreeSeats(boolean hasFreeSeats) {
        this.hasFreeSeats = hasFreeSeats;
    }
}
