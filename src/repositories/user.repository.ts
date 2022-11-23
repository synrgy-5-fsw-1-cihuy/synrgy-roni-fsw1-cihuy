/* eslint-disable no-useless-catch */
import User from "@database/models/user";
import { IUser } from "@dto/user.dto";

const getUserByEmail = async (email: string) => {
  try {
    return await User.findOne({
      where: {
        email,
      },
    });
  } catch (error) {
    throw error;
  }
};

const createUser = async (user: IUser) => {
  try {
    return await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (error) {
    throw error;
  }
};

const getRoleById = async (user: IUser) => {
  try {
    return await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (error) {
    throw error;
  }
};

export default { getUserByEmail, createUser };
