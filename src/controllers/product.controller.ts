import { Request, Response } from "express";

class ProductController {
  static findAll = (req: Request, res: Response) => {
    res.json({ message: "Get all products" });
  };

  static find = (req: Request, res: Response) => {
    const productId = req.params.id;
    res.json({ message: `Get a product with id: ${productId}` });
  };

  static create = (req: Request, res: Response) => {
    res.json({ message: "Create a product" });
  };

  static update = (req: Request, res: Response) => {
    const productId = req.params.id;
    res.json({ message: `Update a product with id: ${productId}` });
  };

  static delete = (req: Request, res: Response) => {
    const productId = req.params.id;
    res.json({ message: `Delete a product with id: ${productId}` });
  };
}

export default ProductController;
