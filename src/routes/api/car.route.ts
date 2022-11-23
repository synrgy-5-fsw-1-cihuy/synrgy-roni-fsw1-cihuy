import express from "express";

import CarController from "@controllers/car.controller";

const CarRouter = express.Router();

CarRouter.get("/", CarController.getAllCar);
CarRouter.get("/:id", CarController.getCarById);
CarRouter.post("/", CarController.createCar);
CarRouter.put("/:id", CarController.updateCar);
CarRouter.delete("/:id", CarController.deleteCar);

export default CarRouter;
