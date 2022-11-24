import jwt from "jsonwebtoken";

import env from "@constants/env";

import { UserDecoded } from "@dto/user.dto";

export const generateAccessToken = (user: UserDecoded) => {
  return jwt.sign(user, env.JWT_ACCESS_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (user: UserDecoded) => {
  return jwt.sign(user, env.JWT_REFRESH_SECRET, { expiresIn: "1d" });
};
