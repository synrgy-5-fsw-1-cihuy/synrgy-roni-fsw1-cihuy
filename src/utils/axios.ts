import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_HOST ?? "http://localhost:8080",
});

export default axiosInstance;
