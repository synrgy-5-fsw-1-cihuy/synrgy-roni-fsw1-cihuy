import { NextFunction, Request, Response } from "express";

import AppError from "@utils/error";
import logger from "@utils/logger";

// eslint-disable-next-line unused-imports/no-unused-vars
const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(error);
  const errorStatus = (error as AppError).status || 500;
  const errorMessage = error.message || "Something went wrong";
  if (error instanceof AppError) {
    res.status((error as AppError).status).json({
      status: errorStatus,
      message: errorMessage,
      data: null,
    });
    return;
  }
  res.status(400).json({
    status: 400,
    message: "Bad Request",
    data: null,
  });
};

export default errorHandler;
