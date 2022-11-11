import { NextFunction, Request, Response } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const role = req.headers.mrole
    ? req.headers.mrole
    : req.headers.mrole?.toLowerCase();
  const auth = req.headers.authorization;

  // if (!role) {
  //   res.status(401).json({ message: "Unauthorized" });
  //   return;
  // }

  if (auth && role === "user" && req.method === "GET") {
    next();
    return;
  }

  if (auth && role === "admin") {
    next();
    return;
  }

  // res.status(400).json({ message: "Bad Request" });
  res.status(401).json({ message: "Unauthorized" });
  return;
};

export default auth;
