import { NextFunction, Request, Response } from "express";

import userService from "@services/user.service";

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    const result = await userService.registerUser({
      name,
      email,
      password,
    });
    res.status(201).json({
      status: 201,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser({
      email,
      password,
    });
    res.status(200).json({
      status: 200,
      message: "User login successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateUserRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.updateUserRole(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.getCurrentUser(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  registerUser,
  loginUser,
  updateUserRole,
  getCurrentUser,
};
