import express from "express";

import CarRouter from "@routes/api/car.route";
import UserRouter from "@routes/api/user.route";

const APIRouter = express.Router();

// APIRouter.use("/users", UserRouter);
APIRouter.use("/users", UserRouter);
APIRouter.use("/cars", CarRouter);

export default APIRouter;
