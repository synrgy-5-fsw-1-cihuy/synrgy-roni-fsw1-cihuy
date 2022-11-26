import Car from "@database/models/car";

import { ICarCreate } from "@dto/car.dto";

const createCar = async (data: ICarCreate) => {
  const result = await Car.create({
    ...data,
  });
  return result;
};

const getAllCar = async () => {
  const result = await Car.findAll();
  return result;
};

const getCarById = async (id: string) => {
  const result = await Car.findByPk(id);
  return result;
};

const updateCar = async (data: ICarCreate, id: string) => {
  const result = await Car.update(data, {
    where: {
      id,
    },
  });
  return result;
};

const deleteCar = async (id: string) => {
  const result = await Car.destroy({
    where: {
      id,
    },
  });
  return result;
};

export default {
  createCar,
  getAllCar,
  getCarById,
  updateCar,
  deleteCar,
};
