package com.example.kinoticketreservierungssystem.entity;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import org.springframework.data.annotation.Id;

@Container(containerName = "Menu")
public class Menu {
    @Id
    String menuId;
    // small, medium, big
    @PartitionKey
    String menuSize;
    double price;

    public Menu(String menuId, String menuSize, double price) {
        this.menuId = menuId;
        this.menuSize = menuSize;
        this.price = price;
    }

    public String getMenuId() {
        return menuId;
    }

    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }

    public String getMenuSize() {
        return menuSize;
    }

    public void setMenuSize(String menuSize) {
        this.menuSize = menuSize;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Menu menu = (Menu) o;

        if (!menuId.equals(menu.menuId)) return false;
        return menuSize.equals(menu.menuSize);
    }

    @Override
    public int hashCode() {
        int result = menuId.hashCode();
        result = 31 * result + menuSize.hashCode();
        return result;
    }
}
