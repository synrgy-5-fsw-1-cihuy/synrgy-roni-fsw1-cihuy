const express = require("express");
const auth = require("../../middlewares/auth.middleware");
const ProductController = require("../../controllers/product.controller");

const ProductRouter = express.Router();
// const PATH = "/products";

ProductRouter.use(auth);

// ProductRouter.get(`${PATH}`, ProductController.findAll);
// ProductRouter.get(`${PATH}/:id`, ProductController.find);
// ProductRouter.post(`${PATH}`, ProductController.create);
// ProductRouter.put(`${PATH}/:id`, ProductController.update);
// ProductRouter.delete(`${PATH}/:id`, ProductController.delete);

ProductRouter.get(`"/products/"`, ProductController.findAll);
ProductRouter.get("/products/:id", ProductController.find);
ProductRouter.post("/products/", ProductController.create);
ProductRouter.put("/products/:id", ProductController.update);
ProductRouter.delete("/products/:id", ProductController.delete);

module.exports = ProductRouter;
