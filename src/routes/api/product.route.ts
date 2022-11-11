import express from "express";

import ProductController from "@controllers/product.controller";

import auth from "@middlewares/auth.middleware";

const ProductRouter = express.Router();
// const PATH = "/products";

ProductRouter.use(auth);

// ProductRouter.get(`${PATH}`, ProductController.findAll);
// ProductRouter.get(`${PATH}/:id`, ProductController.find);
// ProductRouter.post(`${PATH}`, ProductController.create);
// ProductRouter.put(`${PATH}/:id`, ProductController.update);
// ProductRouter.delete(`${PATH}/:id`, ProductController.delete);

// ProductRouter.get("/products/", ProductController.findAll);
// ProductRouter.get("/products/:id", ProductController.find);
// ProductRouter.post("/products/", ProductController.create);
// ProductRouter.put("/products/:id", ProductController.update);
// ProductRouter.delete("/products/:id", ProductController.delete);

ProductRouter.get("/", ProductController.findAll);
ProductRouter.get("/:id", ProductController.find);
ProductRouter.post("/", ProductController.create);
ProductRouter.put("/:id", ProductController.update);
ProductRouter.delete("/:id", ProductController.delete);

export default ProductRouter;
