import { ICarCreate } from "@dto/car.dto";

import CarRepository from "@repositories/car.repository";

const getAllCar = async () => {
  const cars = await CarRepository.getAllCar();
  return cars;
};

const getCarById = async (id: string) => {
  const car = await CarRepository.getCarById(id);

  if (!car) {
    throw new Error("Car not found");
  }

  return car;
};

const createCar = async (data: ICarCreate) => {
  const result = await CarRepository.createCar(data);

  return result;
};

const updateCar = async (data: ICarCreate, id: string) => {
  const car = await CarRepository.getCarById(id);

  if (!car) {
    throw new Error("Car not found");
  }

  const result = await CarRepository.updateCar(data, id);

  return result;
};

const deleteCar = async (id: string) => {
  const result = await CarRepository.deleteCar(id);

  return result;
};

export default {
  getAllCar,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
