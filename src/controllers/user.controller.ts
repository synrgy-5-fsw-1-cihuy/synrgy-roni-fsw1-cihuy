import userService from "@services/user.service";
import { Request, Response } from "express";

const registerUser = async (req: Request, res: Response) => {
  const result = await userService.registerUser(req.body);
  res.status(result.status).json(result);
};

const loginUser = async (req: Request, res: Response) => {
  const result = await userService.loginUser(req.body);
  res.status(result.status).json(result);
};

const updateUserRole = async (req: Request, res: Response) => {
  const result = await userService.updateUserRole(req.body);
  res.status(result.status).json(result);
};

const getCurrentUser = async (req: Request, res: Response) => {
  const result = await userService.getCurrentUser(req.body);
  res.status(result.status).json(result);
};

export default {
  registerUser,
  loginUser,
  updateUserRole,
  getCurrentUser,
};
