package com.example.kinoticketreservierungssystem.entity;


import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.google.gson.Gson;
import org.springframework.data.annotation.Id;


@Container(containerName = "Coupons")
public class Coupon {
    @Id
    private String couponID;
    private String couponCode;
    // Type a -> Flat; Type b -> Percent
    @PartitionKey
    private char couponType;
    private double flatAmount;
    private double percentAmount;

    public Coupon(String couponID, String couponCode, char couponType, double flatAmount, double percentAmount) {
        this.couponID = couponID;
        this.couponCode = couponCode;
        this.couponType = couponType;
        this.flatAmount = flatAmount;
        this.percentAmount = percentAmount;
    }

    public Coupon() {

    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this, Coupon.class);
    }

    public String getCouponID() {
        return couponID;
    }

    public void setCouponID(String couponID) {
        this.couponID = couponID;
    }

    public String getCouponCode() {
        return couponCode;
    }

    public void setCouponCode(String couponCode) {
        this.couponCode = couponCode;
    }

    public char getCouponType() {
        return couponType;
    }

    public void setCouponType(char couponType) {
        this.couponType = couponType;
    }

    public double getFlatAmount() {
        return flatAmount;
    }

    public void setFlatAmount(double flatAmount) {
        this.flatAmount = flatAmount;
    }

    public double getPercentAmount() {
        return percentAmount;
    }

    public void setPercentAmount(double percentAmount) {
        this.percentAmount = percentAmount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Coupon coupon = (Coupon) o;

        if (couponType != coupon.couponType) return false;
        return couponID.equals(coupon.couponID);
    }

    @Override
    public int hashCode() {
        int result = couponID.hashCode();
        result = 31 * result + (int) couponType;
        return result;
    }
}
