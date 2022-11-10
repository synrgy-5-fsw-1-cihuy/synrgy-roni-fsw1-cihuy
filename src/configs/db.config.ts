import { Sequelize } from "sequelize";
import env from "@constants/env";

const config = {
  host: env.DB_HOST,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  dialect: env.DB_DIALECT,
};

const database = new Sequelize(config);

export default database;
