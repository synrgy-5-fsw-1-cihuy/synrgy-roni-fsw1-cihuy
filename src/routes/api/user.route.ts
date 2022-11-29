import express from "express";

import UserController from "@controllers/user.controller";

import { userLoginDTO, userRegisterDTO } from "@dto/user.dto";

import { isAuthenticated, isAuthorized } from "@middlewares/auth.middleware";
import { validateSchema } from "@middlewares/validate.middleware";

const UserRouter = express.Router();

UserRouter.post("/register", validateSchema(userLoginDTO), UserController.register);

UserRouter.post("/login", validateSchema(userRegisterDTO), UserController.login);

UserRouter.post("/role", isAuthenticated, isAuthorized(["superadmin"]), UserController.updateUserRole);

UserRouter.get("/me", isAuthenticated, UserController.getCurrentUser);

export default UserRouter;
