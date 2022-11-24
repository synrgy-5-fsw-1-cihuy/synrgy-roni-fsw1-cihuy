import express from "express";

import CarController from "@controllers/car.controller";

import { isAuthenticated, isAuthorized } from "@middlewares/auth.middleware";

const CarRouter = express.Router();

CarRouter.use(isAuthenticated);
CarRouter.use(isAuthorized(["admin", "superadmin"]));

CarRouter.get("/", CarController.getAllCar);
CarRouter.get("/:id", CarController.getCarById);
CarRouter.post("/", CarController.createCar);
CarRouter.put("/:id", CarController.updateCar);
CarRouter.delete("/:id", CarController.deleteCar);

export default CarRouter;
