const express = require("express");
const ProductRouter = require("./product.route");

const APIRouter = express.Router();

APIRouter.use("/products", ProductRouter);

module.exports = APIRouter;
