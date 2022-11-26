import { number, object, string } from "yup";

export interface ICarCreate {
  name: string;
  cost: number;
  capacity: string;
  image: string;
}

export const carCreateDTO = object({
  body: object({
    name: string().required("Name is required"),
    cost: number().required("Cost is required"),
    capacity: string().required("Capacity is required"),
    image: string().required("Image is required"),
  }),
});

export const carUpdateDTO = object({
  body: object({
    name: string(),
    cost: number(),
    capacity: string(),
    image: string(),
  }),
});
