import express from "express";

import APIRouter from "@routes/api";
import webRouter from "@routes/web";

const router = express.Router();

router.use(webRouter);
router.use("/api", APIRouter);

export default router;
