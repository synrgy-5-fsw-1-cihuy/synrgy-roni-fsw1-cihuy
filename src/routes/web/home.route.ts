import express, { Request, Response } from "express";

const HomeRouter = express.Router();

HomeRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello Home!");
});

export default HomeRouter;
