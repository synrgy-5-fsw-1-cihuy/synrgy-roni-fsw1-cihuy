import express from "express";

import CarRouter from "@/routes/api/car.route";

const APIRouter = express.Router();

APIRouter.use("/cars", CarRouter);

export default APIRouter;
