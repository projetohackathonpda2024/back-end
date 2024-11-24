import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  "mysql://root:tjLSObinIgPGoFTGSLmwNMjFunxXwcHT@autorack.proxy.rlwy.net:20616/railway"
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados realizada com sucesso!");
  } catch (error) {
    console.error("Conexão mal sucedida", error);
  }
};

export { sequelize, testConnection };
