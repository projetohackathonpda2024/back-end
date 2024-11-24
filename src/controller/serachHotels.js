import { Hotel } from "../models/hotel.js";
import { Op } from "sequelize";

export const searchHotels = async (req, res) => {
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
  
    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching hotels" });
  }
};
export default searchHotels