import { NextFunction, Request, Response } from "express";

import { RequestWithUser } from "@dto/user.dto";

import CarService from "@services/car.service";

const getAllCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CarService.getAllCar();
    res.status(200).json({
      status: 200,
      message: "Success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCarById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await CarService.getCarById(id);
    res.status(200).json({
      status: 200,
      message: "Success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CarService.createCar(req.body, (req as RequestWithUser).user.id);
    res.status(201).json({
      status: 201,
      message: "Success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await CarService.updateCar(data, id, (req as RequestWithUser).user.id);
    res.status(200).json({
      status: 200,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

const deleteCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await CarService.deleteCar(id, (req as RequestWithUser).user.id);
    res.status(200).json({
      status: 200,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllCar,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
