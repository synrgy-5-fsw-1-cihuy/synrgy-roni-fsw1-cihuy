import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import errorHandler from "@middlewares/error.middleware";
import morgan from "@middlewares/morgan.middleware";

import router from "@routes/index";

const app = express();

app.use(cors());
app.use(morgan);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);

app.use(errorHandler);

export default app;
