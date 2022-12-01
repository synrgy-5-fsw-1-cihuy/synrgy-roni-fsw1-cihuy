import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { RequestWithUser } from "@dto/user.dto";

import AppError from "@utils/error";
import { verifyAccessToken } from "@utils/jwt";

export interface CustomRequest extends Request {
  user: string | JwtPayload;
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new AppError("Unauthenticated", 401);
    }

    const decoded = verifyAccessToken(token);
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
      throw new AppError("Forbidden", 403);
    }
    next();
  } catch (error) {
    next(error);
  }
};
