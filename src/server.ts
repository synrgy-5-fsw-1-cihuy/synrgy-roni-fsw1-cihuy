import app from "@/app";

import database from "@configs/db.config";

import env from "@constants/env";

import logger from "@utils/logger";

const PORT = env.PORT || 8080;

const start = async () => {
  try {
    await database.sync();
    logger.info(
      "⚡️[database]: Database connection has been established successfully."
    );

    app.listen(PORT, () => {
      logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

start();
