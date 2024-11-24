import { Router } from "express";

import filterGet from "../controller/filterGet.js";
import searchHotels from "../controller/serachHotels.js";
import hotelsByName from "../controller/hotelsByName.js";
import getHotelById from "../controller/getById.js";
import createHotel from "../controller/hotelScreat.js";


const Hotelroutes = Router();

Hotelroutes.get("/hotels/:id", getHotelById);
Hotelroutes.get("/sendDatas", filterGet);
Hotelroutes.post("/hotels/search", searchHotels);
Hotelroutes.post("/hotelscreat", createHotel);
Hotelroutes.post("/hotels/by-name", hotelsByName);

export default Hotelroutes










