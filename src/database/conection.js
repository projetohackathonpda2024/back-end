import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";
configDotenv()
const sequelize = new Sequelize(process.env.DATABASE_URL);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados realizada com sucesso!");
  } catch (error) {
    console.error("Conexão mal sucedida", error);
  }
};

export { sequelize, testConnection };
