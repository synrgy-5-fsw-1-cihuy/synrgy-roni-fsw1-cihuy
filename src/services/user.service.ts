/* eslint-disable no-useless-catch */
import { IUser } from "@dto/user.dto";
import UserRepository from "@repositories/user.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import logger from "@/utils/logger";

const register = async (user: IUser) => {
  try {
    const { name, email, password } = user;

    const isUserExists = await UserRepository.getUserByEmail(email);

    if (isUserExists) {
      return {
        status: 422,
        message: "User already registered",
        data: {
          name,
          email: isUserExists.email,
        },
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await UserRepository.createUser({
      ...user,
      password: hashedPassword,
    });

    return {
      status: 201,
      message: "User created successfully",
      data: {
        result,
      },
    };
  } catch (error) {
    logger.error(error);
    throw {
      status: 500,
      message: "User created successfully",
      data: null,
    };
  }
};

const login = async (user: IUser) => {
  try {
    const { email, password } = user;
    const userExists = await UserRepository.getUserByEmail(email);

    if (!userExists) {
      throw new Error("User does not exist");
    }

    const isPasswordValid = await bcrypt.compare(password, userExists.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ ...userExists.dataValues }, "secret", {
      expiresIn: "1h",
    });

    return {
      status: 200,
      message: "User login successfully",
      data: token,
    };
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

export default { register, login };
