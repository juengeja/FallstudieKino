package com.example.kinoticketreservierungssystem.entity;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import com.google.gson.Gson;
import org.springframework.data.annotation.Id;
import java.time.LocalDateTime;


@Container(containerName = "ShowEvents")
public class ShowEvent {
    @Id
    private String showEventID;
    private Movie movieInfo;
    private SeatingTemplate seatingTemplateInfo;
    private LocalDateTime eventStart;
    @PartitionKey
    private boolean is3D;
    private boolean live = true;

    public ShowEvent(String showEventID, Movie movieInfo, SeatingTemplate seatingTemplateInfo, LocalDateTime eventStart, boolean is3D, boolean isLive) {
        this.showEventID = showEventID;
        this.movieInfo = movieInfo;
        this.seatingTemplateInfo = seatingTemplateInfo;
        this.eventStart = eventStart;
        this.is3D = is3D;
        this.live = isLive;
    }

    public ShowEvent() {
    }

    public ShowEvent(String showEventID, LocalDateTime eventStart, boolean is3D, boolean isLive) {
        this.showEventID = showEventID;
        this.eventStart = eventStart;
        this.is3D = is3D;
        this.live = isLive;
    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this, ShowEvent.class);
    }

    public String getShowEventID() {
        return showEventID;
    }

    public void setShowEventID(String showEventID) {
        this.showEventID = showEventID;
    }

    public Movie getMovieInfo() {
        return movieInfo;
    }

    public void setMovieInfo(Movie movieInfo) {
        this.movieInfo = movieInfo;
    }

    public SeatingTemplate getSeatingTemplateInfo() {
        return seatingTemplateInfo;
    }

    public void setSeatingTemplateInfo(SeatingTemplate seatingTemplateInfo) {
        this.seatingTemplateInfo = seatingTemplateInfo;
    }

    public LocalDateTime getEventStart() {
        return eventStart;
    }

    public void setEventStart(LocalDateTime eventStart) {
        this.eventStart = eventStart;
    }

    public boolean isIs3D() {
        return is3D;
    }

    public void setIs3D(boolean is3D) {
        this.is3D = is3D;
    }

    public boolean isLive() {
        return live;
    }

    public void setLive(boolean live) {
        this.live = live;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ShowEvent showEvent = (ShowEvent) o;

        if (is3D != showEvent.is3D) return false;
        return showEventID.equals(showEvent.showEventID);
    }

    @Override
    public int hashCode() {
        int result = showEventID.hashCode();
        result = 31 * result + (is3D ? 1 : 0);
        return result;
    }
}