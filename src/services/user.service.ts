import { UserAccessDecoded } from "@dto/user.dto";

import UserRepository from "@repositories/user.repository";

import AppError from "@utils/error";

const updateUserRole = async (email: string, role: string) => {
  const user = await UserRepository.getUserByEmail(email);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const result = await UserRepository.updateRoleById(role, user.id);

  return result;
};

const getCurrentUser = async (user: UserAccessDecoded) => {
  const userExists = await UserRepository.getUserById(user.id);

  if (!userExists) {
    throw new AppError("User not found", 404);
  }

  return user;
};

export default { updateUserRole, getCurrentUser };
