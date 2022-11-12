import { Request, Response } from "express";

import Car from "@models/car";

import logger from "@utils/logger";

interface CarController {
  findAll(req: Request, res: Response): void;
  find(req: Request, res: Response): void;
  create(req: Request, res: Response): void;
  update(req: Request, res: Response): void;
  delete(req: Request, res: Response): void;
}

class CarController {
  public index = async (req: Request, res: Response) => {
    try {
      const result = await Car.findAll();
      res.json({ message: "Get all car", data: result });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  public show = async (req: Request, res: Response) => {
    try {
      const result = await Car.findByPk(req.params.id);
      if (!result) {
        res.status(404).json({ message: "Car not found", data: result });
        return;
      }
      res.json({ message: "Get a car", data: result });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  public save = async (req: Request, res: Response) => {
    try {
      const result = await Car.create(req.body);
      res.json({ message: "Create a car", data: result });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  public patch = async (req: Request, res: Response) => {
    try {
      const carId = req.params.id;
      const result = await Car.update(req.body, { where: { id: carId } });
      res.json({
        message: `Update a car with id: ${carId}`,
        data: result,
      });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  public remove = async (req: Request, res: Response) => {
    try {
      const carId = req.params.id;
      const result = await Car.destroy({ where: { id: carId } });
      res.json({
        message: `Delete a car with id: ${carId}`,
        data: result,
      });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

export default new CarController();
