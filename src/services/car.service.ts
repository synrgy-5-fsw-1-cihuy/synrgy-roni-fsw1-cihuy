import AppError from "@/utils/error";

import { ICar } from "@dto/car.dto";

import CarRepository from "@repositories/car.repository";

const getAllCar = async () => {
  const cars = await CarRepository.getAllCar();
  return cars;
};

const getCarById = async (id: string) => {
  const car = await CarRepository.getCarById(id);

  if (!car) {
    throw new AppError("Car not found", 404);
  }

  return car;
};

const createCar = async (data: ICar, userId: number) => {
  const result = await CarRepository.createCar({
    ...data,
    created_by: userId,
  });

  return result;
};

const updateCar = async (data: ICar, carId: string, userId: number) => {
  const car = await CarRepository.getCarById(carId);

  if (!car) {
    throw new AppError("Car not found", 404);
  }

  const result = await CarRepository.updateCar({ ...data, updated_by: userId }, carId);

  if (!result) {
    throw new AppError("Something went wrong", 400);
  }

  return result;
};

const deleteCar = async (id: string) => {
  const result = await CarRepository.deleteCar(id);

  if (!result) {
    throw new AppError("Car not found", 404);
  }

  return result;
};

export default {
  getAllCar,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
