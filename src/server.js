import express from "express";
import cors from "cors";
import { Hotelroutes } from "./router/router.js";
import { testConnection } from "./database/conection.js";

const app = express();


app.use(cors({ origin: "*" }));


app.use(express.json());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permite qualquer origem
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


app.use(Hotelroutes);


const PORT = 3090;
app.listen(PORT, () => {
  testConnection();
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
