import cors from "cors";
import express, { Application, Request, Response, NextFunction } from "express";
import owner from "./router/ownerRouter";
import morgan from "morgan";
import helmet from "helmet";
import { HTTP, mainError } from "./error/MainError";
import { errorHandler } from "./error/ErrorBuilder";
import admin from "./router/adminRouter";
import store from "./router/storeRouter";

export const mainApp = (app: Application) => {
  app.use(express.json()).use(cors()).set("view engine", "ejs");

  app.use(helmet());
  app.use(morgan("dev"));

  app.use("/api", owner);
  app.use("/api/admin", admin);
  app.use("/api/store", store);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: `Welcome to AjMall!!!`,
      });
    } catch (error) {
      return res.status(404).json({
        message: `Error on Default Api Route`,
        data: error,
      });
    }
  });

  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    new mainError({
      name: `A route error occured`,
      message: `${req.originalUrl} is incorrect`,
      status: HTTP.BAD_REQUEST,
      success: false,
    });
  });

  app.use(errorHandler);
};
