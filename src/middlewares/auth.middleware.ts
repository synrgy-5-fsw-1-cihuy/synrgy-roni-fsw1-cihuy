import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import env from "@constants/env";

import { RequestWithUser } from "@dto/user.dto";

import AppError from "@utils/error";

export interface CustomRequest extends Request {
  user: string | JwtPayload;
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new AppError("Unauthenticated", 401);
    }

    const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET);
    (req as CustomRequest).user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};

export const isAuthorized = (allowed: string[]) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = (req as RequestWithUser).user;
    if (!allowed.includes(user.role)) {
      throw new AppError("Unauthorized", 403);
    }
    next();
  } catch (error) {
    next(error);
  }
};
