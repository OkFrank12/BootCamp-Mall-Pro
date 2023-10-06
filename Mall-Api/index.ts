import express, { Application } from "express";
import { mainApp } from "./mainApp";
import { environment } from "./config/envVariables";

const port: number = parseInt(environment.PORT);

const app: Application = express();
mainApp(app);

const server = app.listen(port, () => {
  console.log("");
  console.log("Server is live", port);
});

process.on("uncaughtException", (error) => {
  console.log("uncaughtException", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("unhandledRejection", reason);

  server.close(() => {
    process.exit(1);
  });
});
