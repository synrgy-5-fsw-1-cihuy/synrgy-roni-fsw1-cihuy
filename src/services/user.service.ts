import bcrypt from "bcrypt";

import { UserAccessDecoded } from "@dto/user.dto";
import { ILoginUser, IRegisterUser } from "@dto/user.dto";

import UserRepository from "@repositories/user.repository";

import AppError from "@utils/error";
import { generateAccessToken, generateRefreshToken } from "@utils/jwt";

const register = async (user: IRegisterUser) => {
  const { email, password } = user;

  const isUserExist = await UserRepository.getUserByEmail(email);
  if (isUserExist) {
    throw new AppError("User already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await UserRepository.createUser({
    ...user,
    password: hashedPassword,
  });

  return {
    name: result.name,
    email: result.email,
    role: result.role,
  };
};

const login = async (user: ILoginUser) => {
  const { email, password } = user;
  const existUser = await UserRepository.getUserByEmail(email);

  if (!existUser) {
    throw new AppError("User not found", 404);
  }

  const isPasswordValid = await bcrypt.compareSync(password, existUser.password);

  if (!isPasswordValid) {
    throw new AppError("Invalid credentials", 401);
  }

  const accessToken = generateAccessToken({ id: existUser.id, role: existUser.role });

  const refreshToken = generateRefreshToken({ id: existUser.id });

  // await UserRepository.updateRefreshTokenById(existUser.id, refreshToken);

  return { accessToken, refreshToken };
};

const updateUserRole = async (email: string, role: string) => {
  const user = await UserRepository.getUserByEmail(email);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const result = await UserRepository.updateRoleById(role, user.id);

  if (!result) {
    throw new AppError("Something went wrong", 400);
  }

  return result;
};

const getCurrentUser = async (user: UserAccessDecoded) => {
  const userExists = await UserRepository.getUserById(user.id);

  if (!userExists) {
    throw new AppError("User not found", 404);
  }

  return {
    name: userExists.name,
    email: userExists.email,
    role: userExists.role,
  };
};

export default { login, register, updateUserRole, getCurrentUser };
