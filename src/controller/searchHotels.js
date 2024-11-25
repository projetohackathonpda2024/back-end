import { Hotel } from "../models/hotel.js";
import { Op } from "sequelize";

export const searchHotels = async (req, res) => {
  const { city} = req.body; 

  try {
   
    const hotels = await Hotel.findAll({
      where: {
        city: city
      },
    });
  
    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching hotels" });
  }

};
export default searchHotels