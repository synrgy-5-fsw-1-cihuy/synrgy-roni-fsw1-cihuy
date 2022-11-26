import { NextFunction, Request, Response } from "express";

import AuthService from "@services/auth.service";

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    const result = await AuthService.register({
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
    const result = await AuthService.login({
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

export default {
  register,
  login,
};
