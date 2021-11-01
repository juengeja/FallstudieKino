package com.example.kinoticketreservierungssystem.entity;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import com.google.gson.Gson;
import org.springframework.data.annotation.Id;

@Container(containerName = "Admins")
public class Admin {
    @Id
    private String adminID;
    @PartitionKey
    private String username;
    private boolean successful = true;
    private String password;

    public Admin(String adminID, String username, String password) {
        this.adminID = adminID;
        this.username = username;
        this.password = password;
    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this, Admin.class);
    }

    public String getAdminID() {
        return adminID;
    }

    public void setAdminID(String adminID) {
        this.adminID = adminID;
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

    public boolean isSuccessful() {
        return successful;
    }

    public void setSuccessful(boolean successful) {
        this.successful = successful;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Admin admin = (Admin) o;

        if (!adminID.equals(admin.adminID)) return false;
        return username.equals(admin.username);
    }

    @Override
    public int hashCode() {
        int result = adminID.hashCode();
        result = 31 * result + username.hashCode();
        return result;
    }
}
