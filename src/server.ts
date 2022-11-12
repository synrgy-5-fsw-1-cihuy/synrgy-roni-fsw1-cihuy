import app from "@/app";

import database from "@configs/db.config";

import logger from "@utils/logger";

const PORT = process.env.PORT || 3000;

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
