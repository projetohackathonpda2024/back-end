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
    allowNull: false,
  },
  stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  district: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  placeId: {
    type: DataTypes.STRING,
    allowNull: false,
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
});

export { Hotel };
