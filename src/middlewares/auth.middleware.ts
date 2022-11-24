import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import env from "@constants/env";

import { RequestWithUser } from "@dto/user.dto";

export interface CustomRequest extends Request {
  user: string | JwtPayload;
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized",
        data: null,
      });
    }

    const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET);
    (req as CustomRequest).user = decoded;

    next();
  } catch (error) {
    res.status(403).json({
      status: 403,
      message: "Forbidden",
      data: null,
    });
  }
};

export const isAuthorized = (allowed: string[]) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = (req as RequestWithUser).user;
    if (allowed.includes(user.role)) {
      return res.status(403).json({
        status: 403,
        message: "Forbidden",
        data: null,
      });
    }
    next();
  } catch (error) {
    res.status(403).json({
      status: 403,
      message: "Forbidden",
      data: null,
    });
  }
};
