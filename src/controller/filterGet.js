import { Hotel } from "../models/hotel.js";

const filterGet = async (req,res) => {
  const {type} = req.body
  try{
    const findDataEspecifc = await Hotel.findAll({
        where: { type: type },
      });
      console.log(type,"valor enviado")
    res.status(200).send(findDataEspecifc)
   }catch(error){
    res.status(500).json({error:"erro ao filtrar dado"})    
   }
}
export default filterGet 