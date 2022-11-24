import { Request } from "express";
import { object, string } from "yup";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export const userLoginDTO = object({
  body: object({
    name: string().required("Name is required"),
    email: string().email("Email is invalid").required("Email is required"),
    password: string().required("Password is required"),
  }),
});

export const userRegisterDTO = object({
  body: object({
    email: string().email("Email is invalid").required("Email is required"),
    password: string().required("Password is required"),
  }),
});

export interface UserDecoded {
  id: string;
  role: string;
}

export interface RequestWithUser extends Request {
  user: UserDecoded;
}
