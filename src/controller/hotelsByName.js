import { Hotel } from "../models/hotel.js";
import { Op } from "sequelize";

const hotelsByName = async (req, res) => {
    const { name } = req.body;
  
    try {
      const hotels = await Hotel.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.json(hotels);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching hotels" });
    }
  }
  export default hotelsByName
  