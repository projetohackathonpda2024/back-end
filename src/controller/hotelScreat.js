import { Hotel } from "../models/hotel.js";

const createHotel = async (req, res) => {
  const {
    name,
    type,
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
      type,
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
};

export default createHotel