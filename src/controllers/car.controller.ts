import { Request, Response } from "express";

import Car from "@models/car";

import logger from "@utils/logger";

interface CarControllerInterface {
  findAll: (req: Request, res: Response) => void;
  find: (req: Request, res: Response) => void;
  create: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
  delete: (req: Request, res: Response) => void;
}

class CarController implements CarControllerInterface {
  public findAll = async (req: Request, res: Response) => {
    try {
      const result = await Car.findAll();
      res.json({ message: "OK", data: result });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  public find = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Bad request" });
      }

      const result = await Car.findByPk(req.params.id);
      if (!result) {
        res.status(404).json({ message: "Car not found" });
        return;
      }

      res.json({ message: "OK", data: result });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  public create = async (req: Request, res: Response) => {
    try {
      const { name, cost, capacity, image } = req.body;
      if (!name || !cost || !capacity || !image) {
        res.status(400).json({
          message: "Invalid request",
        });
        return;
      }

      const result = await Car.create(req.body);
      res.status(201).json({ message: "Created", data: result });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, cost, capacity, image } = req.body;

      if (!id || (!name && !cost && !capacity && !image)) {
        res.status(400).json({ message: "Bad request" });
        return;
      }

      const car = await Car.findByPk(id);
      if (!car) {
        res.status(404).json({ message: "Car not found" });
        return;
      }

      await Car.update(req.body, { where: { id } });

      res.json({
        message: `Car with id: ${id} has been updated.`,
      });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Bad request" });
        return;
      }

      const result = await Car.destroy({ where: { id } });
      if (!result) {
        res.status(404).json({ message: "Car not found" });
        return;
      }

      res.json({
        message: `Car with id: ${id} has been deleted`,
      });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

export default new CarController();
