import express from "express";

import UserController from "@controllers/user.controller";

import { userLoginDTO, userRegisterDTO } from "@dto/user.dto";

import { isAuthorized } from "@middlewares/auth.middleware";
import { validateSchema } from "@middlewares/validate.middleware";

const UserRouter = express.Router();

UserRouter.post("/register", validateSchema(userLoginDTO), UserController.registerUser);

UserRouter.post("/login", validateSchema(userRegisterDTO), UserController.loginUser);

UserRouter.post("/roles", isAuthorized(["superadmin"]), UserController.updateUserRole);

// UserRouter.post("/me", UserController.getCurrentUser);

export default UserRouter;
