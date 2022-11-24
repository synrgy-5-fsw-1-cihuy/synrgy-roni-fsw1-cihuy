import { NextFunction, Request, Response } from "express";
import { AnySchema, ValidationError } from "yup";

export const validateSchema = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate(
      {
        body: req.body,
        query: req.query,
        params: req.params,
      },
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({
        status: 400,
        message: "Bad request",
        errors: error.errors,
      });
    }
  }
};
