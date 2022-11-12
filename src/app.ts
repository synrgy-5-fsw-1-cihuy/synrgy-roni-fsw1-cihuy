import cors from "cors";
import express from "express";

import morgan from "@middlewares/morgan.middleware";

import router from "@routes/index";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan);
app.use(express.urlencoded({ extended: true }));

app.use(router);

export default app;
