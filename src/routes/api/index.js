const express = require("express");
const ProductRouter = require("./product.route");

const APIRouter = express.Router();

APIRouter.use(ProductRouter);

module.exports = APIRouter;
