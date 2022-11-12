import { Sequelize } from "sequelize";

import logger from "@/utils/logger";

import env from "@constants/env";

const config = {
  host: env.DB_HOST,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  dialect: env.DB_DIALECT,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logging: (msg: any) => logger.info(msg),
};

const database = new Sequelize(config);

export default database;
