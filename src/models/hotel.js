import { sequelize } from "../database/conection.js";
import { DataTypes } from "sequelize";
const Hotel = sequelize.define("Hotel", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stars: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  district: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  placeId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  thumb: {
    type: DataTypes.STRING,
  },
  images: {
    type: DataTypes.JSON,
  },
  amenities: {
    type: DataTypes.JSON,
  },
  pois: {
    type: DataTypes.JSON,
  },
  reviews: {
    type: DataTypes.JSON,
  },
  cnpj: {
    type: DataTypes.STRING(20),
  },
  type: {
    type: DataTypes.STRING, 
    allowNull: false, 
  }
});


export { Hotel };
