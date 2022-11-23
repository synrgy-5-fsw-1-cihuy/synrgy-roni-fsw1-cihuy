import { NextFunction, Request, Response } from "express";

const authCarManager = (req: Request, res: Response, next: NextFunction) => {
  // const { id } = req.params;
  // const { userId } = req.body;

  // if (id !== userId) {
  //   return res.status(401).json({ message: "Unauthorized" });
  next();
};

// const authJWTCookie = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { token } = req.cookies;
//     const user = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = user;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }
// };

export default { authCarManager };
