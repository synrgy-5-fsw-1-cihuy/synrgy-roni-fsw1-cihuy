import { NextFunction, Request, Response } from "express";

import { RequestWithUser } from "@dto/user.dto";

import userService from "@services/user.service";
const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    const result = await userService.register({
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

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await userService.login({
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
    const { email, role } = req.body;
    const result = await userService.updateUserRole(email, role);
    res.status(200).json({
      status: 200,
      message: "User role updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = (req as RequestWithUser).user;
    const result = await userService.getCurrentUser(user);
    res.status(200).json({
      status: 200,
      message: "User fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  login,register,
  updateUserRole,
  getCurrentUser,
};
