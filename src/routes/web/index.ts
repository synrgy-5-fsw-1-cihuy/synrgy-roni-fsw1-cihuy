import express from "express";

import HomeRouter from "@/routes/web/home.route";

const router = express.Router();

router.use(HomeRouter);

export default router;
