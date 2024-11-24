import { Router } from "express";
import { Hotel } from "../models/hotel.js";
const Hotelroutes = Router();

Hotelroutes.get("/hotels", async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching hotels" });
  }
});

export { Hotelroutes };
