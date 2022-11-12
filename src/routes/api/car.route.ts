import express from "express";

import CarController from "@controllers/car.controller";

const CarRouter = express.Router();

CarRouter.get("/", CarController.index);
CarRouter.get("/:id", CarController.show);
CarRouter.post("/", CarController.save);
CarRouter.put("/:id", CarController.patch);
CarRouter.delete("/:id", CarController.remove);

export default CarRouter;
