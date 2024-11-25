import { Hotel } from "../models/hotel.js";
import { Sequelize } from "sequelize";

export const getHotelById = async (req, res) => {
  const { id } = req.params;  

  try {
   
    const hotel = await Hotel.findByPk(id);
     if (hotel) {
      
      res.status(200).json(hotel);
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
};
export default getHotelById