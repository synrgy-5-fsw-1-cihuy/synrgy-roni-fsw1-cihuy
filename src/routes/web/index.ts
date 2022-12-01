import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import specs from "@utils/swagger";

const router = express.Router();

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(specs));

router.get("/", (req: Request, res: Response) => {
  res.send("Hello Home!");
});

export default router;
