import bcrypt from "bcrypt";

import { ILoginUser, IRegisterUser } from "@dto/user.dto";

import UserRepository from "@repositories/user.repository";

import AppError from "@utils/error";
import { generateAccessToken, generateRefreshToken } from "@utils/jwt";

const registerUser = async (user: IRegisterUser) => {
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

const loginUser = async (user: ILoginUser) => {
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

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-explicit-any
const updateUserRole = async (user: any) => {
  try {
    return {
      status: 500,
      message: "Internal server error",
      data: user,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error",
      data: user,
    };
  }
};

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-explicit-any
const getCurrentUser = async (user: any) => {
  try {
    return {
      status: 500,
      message: "Internal server error",
      data: null,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error",
      data: null,
    };
  }
};

export default { registerUser, loginUser, updateUserRole, getCurrentUser };
