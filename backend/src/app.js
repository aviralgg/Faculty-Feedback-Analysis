import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

import adminRouter from "./routes/admin.routes.js";
app.use("/api/v1/admin", adminRouter);

import studentRouter from "./routes/student.routes.js";
app.use("/api/v1/student", studentRouter);

import { errorHandler } from "./middlewares/errorHandler.middleware.js";
app.use(errorHandler);

export { app };
