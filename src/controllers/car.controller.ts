import { Request, Response } from "express";
import formidable from "formidable";

import saveImage from "@/utils/cloudinary";

import Car from "@models/car";

import logger from "@utils/logger";

interface CarControllerInterface {
  findAll: (req: Request, res: Response) => void;
  find: (req: Request, res: Response) => void;
  create: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
  delete: (req: Request, res: Response) => void;
}

const form = formidable({ multiples: false });

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

  public create = async (req: Request, res: Response) => {
    try {
      form.parse(req, async (err, fields, files) => {
        const { name, cost, capacity } = fields;
        const { image } = files;

        if (err && (!name || !cost || !capacity || !image)) {
          res.status(400).json({
            message: "Bad request",
          });
          return;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore  incorrect type from formidable
        const imageUrl = await saveImage(image.filepath);

        const result = await Car.create({
          name: fields.name,
          cost: Number(fields.cost),
          capacity: fields.capacity,
          image: imageUrl,
        });

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
      form.parse(req, async (err, fields, files) => {
        // console.log(files);

        const { name, cost, capacity } = fields;
        const { image } = files;

        if (err || (!name && !cost && !capacity && !image)) {
          res.status(400).json({ message: "Bad request" });
          return;
        }

        const car = await Car.findByPk(id);
        if (!car) {
          res.status(404).json({ message: "Car not found" });
          return;
        }

        let imageUrl;
        if (image) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore  incorrect type from formidable
          imageUrl = await saveImage(image.filepath);
        }

        await Car.update(
          {
            ...fields,
            ...(image && { image: imageUrl }),
          },
          { where: { id } }
        );

        res.json({
          message: `Car with id: ${id} has been updated.`,
        });
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
