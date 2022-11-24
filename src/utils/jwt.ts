import jwt from "jsonwebtoken";

import env from "@constants/env";

import { UserAccessDecoded, UserRefreshDecoded } from "@dto/user.dto";

export const generateAccessToken = (user: UserAccessDecoded) => {
  return jwt.sign(user, env.JWT_ACCESS_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (user: UserRefreshDecoded) => {
  return jwt.sign(user, env.JWT_REFRESH_SECRET, { expiresIn: "1d" });
};
