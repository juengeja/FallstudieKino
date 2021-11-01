package com.example.kinoticketreservierungssystem.entity;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import com.example.kinoticketreservierungssystem.blSupport.SeatMod;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.google.gson.Gson;
import org.springframework.data.annotation.Id;

import java.util.Map;

@Container(containerName = "SeatingTemplates")
public class SeatingTemplate {
    // seatingTemplateID naming convention: eventroomID+Template+(localdatetime now .toString)
    @Id
    private String seatingTemplateID;
    @PartitionKey
    private String eventRoomID;
    private Map<String, SeatMod> seatMap;

    public SeatingTemplate(String seatingTemplateID, String eventRoomID, Map<String, SeatMod> seatMap) {
        this.seatingTemplateID = seatingTemplateID;
        this.eventRoomID = eventRoomID;
        this.seatMap = seatMap;
    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this, SeatingTemplate.class);
    }

    public String getSeatingTemplateID() {
        return seatingTemplateID;
    }

    public void setSeatingTemplateID(String seatingTemplateID) {
        this.seatingTemplateID = seatingTemplateID;
    }

    public String getEventRoomID() {
        return eventRoomID;
    }

    public void setEventRoomID(String eventRoomID) {
        this.eventRoomID = eventRoomID;
    }

    public Map<String, SeatMod> getSeatMap() {
        return seatMap;
    }

    public void setSeatMap(Map<String, SeatMod> seatMap) {
        this.seatMap = seatMap;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SeatingTemplate that = (SeatingTemplate) o;

        if (!seatingTemplateID.equals(that.seatingTemplateID)) return false;
        return eventRoomID.equals(that.eventRoomID);
    }

    @Override
    public int hashCode() {
        int result = seatingTemplateID.hashCode();
        result = 31 * result + eventRoomID.hashCode();
        return result;
    }
}
