import { Router } from "express";
import { Hotel } from "../models/hotel.js";
import { Op } from "sequelize";
const Hotelroutes = Router();

Hotelroutes.get("/hotels", async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching hotels" });
  }
});
Hotelroutes.post("/hotels/search", async (req, res) => {
  const { city, minPrice, maxPrice } = req.body;

  try {
    const hotels = await Hotel.findAll({
      where: {
        city,
        price: {
          [Op.between]: [minPrice, maxPrice],
        },
      },
    });

    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching hotels" });
  }
});
Hotelroutes.get("/hotels/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findByPk(id);
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ error: "Hotel not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching hotel" });
  }
});
Hotelroutes.get("/hotels/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findByPk(id);
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ error: "Hotel not found" });
    }
  } catch (error) {
    console.error("Error fetching hotel:", error);

    if (error instanceof Sequelize.DatabaseError) {
      res.status(500).json({ error: "Database error: " + error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
});
Hotelroutes.get("/hotels/by-type/:type", async (req, res) => {
  const { type } = req.params;

  try {
    const hotels = await Hotel.findAll({ where: { tepy: type } });
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching hotels" });
  }
});
Hotelroutes.post("/hotels/by-name", async (req, res) => {
  const { name } = req.body;

  try {
    const hotels = await Hotel.findAll({
      where: {
        nome: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching hotels" });
  }
});


Hotelroutes.post("/hotelscreat", async (req, res) => {
  const {
    name,
    type, // Campo "type" desestruturado
    stars,
    latitude,
    longitude,
    description,
    address,
    district,
    city,
    state,
    country,
    placeId,
    thumb,
    images,
    amenities,
    pois,
    reviews,
    cnpj,
  } = req.body;

  try {
    const novoHotel = await Hotel.create({
      name,
      type, // Incluído aqui como STRING
      stars,
      latitude,
      longitude,
      description,
      address,
      district,
      city,
      state,
      country,
      placeId,
      thumb,
      images,
      amenities,
      pois,
      reviews,
      cnpj,
    });

    res.status(201).json(novoHotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao cadastrar hotel" });
  }
});


export { Hotelroutes };
