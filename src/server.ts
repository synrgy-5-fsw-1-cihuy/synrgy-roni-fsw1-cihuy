import app from "@/app";
import database from "@configs/db.config";

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await database.authenticate();
    console.log("Database connection has been established successfully.");

    app.listen(PORT, () => {
      console.log(`Server listening on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
