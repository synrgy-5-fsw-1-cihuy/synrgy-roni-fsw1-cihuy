/* eslint-disable no-empty */
import { Request, Response } from "express";

const getAllCar = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      status: 200,
      message: "Get all car",
      data: null,
    });
  } catch (error) {}
};

const getCarById = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

const createCar = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

const updateCar = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

const deleteCar = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

export default {
  getAllCar,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
