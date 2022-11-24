import bcrypt from "bcrypt";

import { generateAccessToken } from "@/utils/jwt";

import { IUser } from "@dto/user.dto";

import UserRepository from "@repositories/user.repository";

import logger from "@utils/logger";

const registerUser = async (user: IUser) => {
  try {
    const { email, password } = user;

    const isUserExists = await UserRepository.getUserByEmail(email);

    if (isUserExists) {
      return {
        status: 422,
        message: "User already exists",
        data: null,
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
        name: result.name,
        email: result.email,
        role: result.role,
      },
    };
  } catch (error) {
    logger.error(error);
    if (error instanceof Error) {
      return {
        status: 500,
        message: error.message,
        data: null,
      };
    }
    return {
      status: 500,
      message: "Internal server error",
      data: null,
    };
  }
};

const loginUser = async (user: IUser) => {
  try {
    const { email, password } = user;
    const userExists = await UserRepository.getUserByEmail(email);

    if (!userExists) {
      return {
        status: 404,
        message: "User not found",
        data: null,
      };
    }

    const isPasswordValid = await bcrypt.compareSync(password, userExists.password);

    if (!isPasswordValid) {
      return {
        status: 401,
        message: "Invalid credentials",
        data: null,
      };
    }

    const accessToken = generateAccessToken({ id: userExists.id, role: userExists.role });

    // const refreshToken = jwt.sign(
    //   {
    //     name: userExists.name,
    //     // email: userExists.email,
    //     role: userExists.role,
    //   },
    //   env.JWT_ACCESS_SECRET,
    //   {
    //     expiresIn: "24h",
    //   }
    // );

    // await UserRepository.updateRefreshTokenById(userExists.id, refreshToken);

    return {
      status: 200,
      message: "User login successfully",
      data: accessToken,
    };
  } catch (error) {
    logger.error(error);
    if (error instanceof Error) {
      return {
        status: 500,
        message: error.message,
        data: user,
      };
    }
    return {
      status: 500,
      message: "Internal server error",
      data: user,
    };
  }
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
