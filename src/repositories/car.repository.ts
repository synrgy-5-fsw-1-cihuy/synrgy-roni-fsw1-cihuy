import Car from "@database/models/car";

import { ICar } from "@dto/car.dto";

const createCar = async (data: ICar) => {
  const result = await Car.create({
    ...data,
  });
  return result;
};

const getAllCar = async () => {
  const result = await Car.findAll({
    where: {
      available: true,
      deletedBy: null,
      deletedAt: null,
    },
  });
  return result;
};

const getCarById = async (id: string) => {
  const result = await Car.findByPk(id);
  return result;
};

const updateCar = async (data: ICar, id: string) => {
  const result = await Car.update(
    { ...data },
    {
      where: {
        id,
        available: true,
        deletedBy: null,
        deletedAt: null,
      },
    }
  );
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
