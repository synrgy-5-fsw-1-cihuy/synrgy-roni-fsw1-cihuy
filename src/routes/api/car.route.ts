import express from "express";

import CarController from "@controllers/car.controller";

import { carCreateDTO, carUpdateDTO } from "@dto/car.dto";

import { isAuthenticated, isAuthorized } from "@middlewares/auth.middleware";
import { validateSchema } from "@middlewares/validate.middleware";

const CarRouter = express.Router();

CarRouter.use(isAuthenticated);

CarRouter.get("/", CarController.getAllCar);
CarRouter.get("/:id", CarController.getCarById);
CarRouter.post("/", isAuthorized(["admin", "superadmin"]), validateSchema(carCreateDTO), CarController.createCar);
CarRouter.put("/:id", isAuthorized(["admin", "superadmin"]), validateSchema(carUpdateDTO), CarController.updateCar);
CarRouter.delete("/:id", isAuthorized(["admin", "superadmin"]), CarController.deleteCar);

export default CarRouter;
