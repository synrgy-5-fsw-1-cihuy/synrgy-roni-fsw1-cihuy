import User from "@database/models/user";

import { IRegisterUser } from "@dto/user.dto";

const getUserByEmail = async (email: string) => {
  // try {
  const result = await User.findOne({
    where: {
      email,
    },
  });
  return result;
  // } catch (error) {
  //   throw error;
  // }
};

const createUser = async (user: IRegisterUser) => {
  // try {
  const result = await User.create({
    name: user.name,
    email: user.email,
    password: user.password,
  });
  return result;
  // } catch (error) {
  //   throw error;
  // }
};

const getRoleById = async (email: string) => {
  // try {
  const result = await User.findOne({
    where: {
      email,
    },
  });
  return result;
  // } catch (error) {
  //   throw error;
  // }
};

const getUserById = async (id: number) => {
  // try {
  const result = await User.findByPk(id);
  return result;
  // } catch (error) {
  //   throw error;
  // }
};

const updateRoleById = async (role: string, id: number) => {
  // try {
  const result = await User.update(
    { role },
    {
      where: {
        id,
      },
    }
  );
  return result;
  // } catch (error) {
  //   throw error;
  // }
};

export default {
  getUserByEmail,
  createUser,
  getRoleById,
  updateRoleById,
  getUserById,
};
