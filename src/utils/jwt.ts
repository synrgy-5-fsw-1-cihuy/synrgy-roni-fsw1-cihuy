import jwt from "jsonwebtoken";

import env from "@constants/env";

import { UserAccessDecoded, UserRefreshDecoded } from "@dto/user.dto";

export const generateAccessToken = (user: UserAccessDecoded) => {
  return jwt.sign(user, env.JWT_ACCESS_SECRET, { expiresIn: "30m" });
};

export const generateRefreshToken = (user: UserRefreshDecoded) => {
  return jwt.sign(user, env.JWT_REFRESH_SECRET, { expiresIn: "1d" });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, env.JWT_ACCESS_SECRET);
};
