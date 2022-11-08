const express = require("express");
const ProductController = require("../controllers/product.controller");

const ProductRouter = express.Router();

ProductRouter.get("/", ProductController.findAll);
ProductRouter.get("/:id", ProductController.find);
ProductRouter.post("/", ProductController.create);
ProductRouter.put("/:id", ProductController.update);
ProductRouter.delete("/:id", ProductController.delete);

module.exports = ProductRouter;
