import { NextFunction, Request, Response } from "express";
import formidable from "formidable";

import saveImage from "@/utils/cloudinary";

import Car, { Capacity, CarAttributes } from "@models/car";

import logger from "@utils/logger";

interface CarControllerInterface {
  findAll: (req: Request, res: Response) => void;
  find: (req: Request, res: Response) => void;
  create: (req: Request, res: Response, next: NextFunction) => void;
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
        return;
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

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const form = formidable({ multiples: false });
    try {
      form.parse(req, async (err, fields, files) => {
        // console.log(files);
        if (err) {
          next(err);
          return;
        }

        const { name, cost, capacity } = fields;
        const { image } = files;

        if (!name || !cost || !capacity || !image) {
          res.status(400).json({
            message: "Bad request",
          });
          return;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore  incorrect type from formidable
        const imageUrl = await saveImage(files.image.filepath);

        const result = await Car.create({
          name: fields.name as string,
          cost: Number(fields.cost),
          capacity: fields.capacity as unknown as Capacity,
          image: imageUrl as string,
        } as CarAttributes);

        res.status(201).json({ message: "Created", data: result });
      });
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
