import axios from "../utils/axios";

export const getAllCar = async () => {
  const response = await axios.get("/api/cars");
  return response.data;
};
