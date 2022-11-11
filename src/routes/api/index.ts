import express from "express";

import ProductRouter from "@/routes/api/product.route";

import UploadRouter from "./upload.route";

const APIRouter = express.Router();

APIRouter.use("/products", ProductRouter);
APIRouter.use("/upload", UploadRouter);

export default APIRouter;
