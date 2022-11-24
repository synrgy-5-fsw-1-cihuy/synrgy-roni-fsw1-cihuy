import { Request } from "express";
import { object, string } from "yup";

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface ILoginUser {
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

export interface UserAccessDecoded {
  id: string;
  role: string;
}

export interface UserRefreshDecoded {
  id: string;
}

export interface RequestWithUser extends Request {
  user: UserAccessDecoded;
}
