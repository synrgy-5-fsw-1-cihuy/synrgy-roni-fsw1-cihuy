import express from "express";

import CarController from "@controllers/car.controller";

const CarRouter = express.Router();

CarRouter.get("/", CarController.findAll);
CarRouter.get("/:id", CarController.find);
CarRouter.post("/", CarController.create);
CarRouter.put("/:id", CarController.update);
CarRouter.delete("/:id", CarController.delete);

export default CarRouter;
