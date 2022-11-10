import express from "express";
import webRouter from "@routes/web";
import APIRouter from "@routes/api";

const router = express.Router();

router.use(webRouter);
router.use("/api", APIRouter);

export default router;
