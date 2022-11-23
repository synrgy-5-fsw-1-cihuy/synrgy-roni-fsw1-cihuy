import { config } from "dotenv";
import { Dialect, Sequelize } from "sequelize";

import env from "@constants/env";

import logger from "@utils/logger";

config();

const databaseConfig = {
  host: env.DB_HOST,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  dialect: env.DB_DIALECT as Dialect,
  logging: (msg: string) => logger.info(msg),
};

const databaseConnection = new Sequelize(databaseConfig);

export default databaseConnection;
