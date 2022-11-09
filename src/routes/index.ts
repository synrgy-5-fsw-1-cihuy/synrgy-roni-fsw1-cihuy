import express from "express";
import webRouter from "./web";
import APIRouter from "./api";

const router = express.Router();

router.use(webRouter);
router.use("/api", APIRouter);

export default router;
