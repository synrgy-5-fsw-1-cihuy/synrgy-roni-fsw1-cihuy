import express, { Request, Response } from "express";

class ProductController {
  findAll = (req: Request, res: Response) => {
    res.json({ message: "Get all products" });
  };
  find = (req: Request, res: Response) => {
    const productId = req.params.id;
    res.json({ message: `Get a product with id: ${productId}` });
  };
  create = (req: Request, res: Response) => {
    res.json({ message: "Create a product" });
  };
  update = (req: Request, res: Response) => {
    const productId = req.params.id;
    res.json({ message: `Update a product with id: ${productId}` });
  };
  delete = (req: Request, res: Response) => {
    const productId = req.params.id;
    res.json({ message: `Delete a product with id: ${productId}` });
  };
}
export default new ProductController();
