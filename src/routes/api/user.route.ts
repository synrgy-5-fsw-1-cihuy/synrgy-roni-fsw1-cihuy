import express from "express";

import UserController from "@controllers/user.controller";

const UserRouter = express.Router();

// UserRouter.get("/", UserController.getAllUser);
// UserRouter.get("/:id", UserController.getUserById);
UserRouter.post("/register", UserController.register);
UserRouter.post("/login", UserController.login);
// UserRouter.put("/:id", UserController.updateUser);
// UserRouter.delete("/:id", UserController.deleteUser);

export default UserRouter;
