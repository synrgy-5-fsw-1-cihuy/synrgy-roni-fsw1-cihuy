import paths from "./paths";
import schemas from "./schemas";

export default {
  openapi: "3.0.0",
  info: {
    title: "Binar Challenge 6",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:8080/api",
    },
  ],
  paths: {
    "/users/register": paths.user.register,
    "/users/login": paths.user.login,
    "/users/me": paths.user.getCurrentUser,
    "/cars": paths.car.getAllCar,
    "/cars/{id}": paths.car.getCarById,
  },
  components: {
    schemas: {
      User: schemas.user.UserComponent,
      UserRegisterRequest: schemas.user.UserRegisterRequest,
      UserRegisterResponse: schemas.user.UserRegisterResponse,
      UserLoginRequest: schemas.user.UserLoginRequest,
      UserLoginResponse: schemas.user.UserLoginResponse,
      Car: schemas.car.CarComponent,
    },
  },
};
