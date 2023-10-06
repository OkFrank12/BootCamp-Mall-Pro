import express, { Application } from "express";
import { mainApp } from "./mainApp";

const port:number = 4000

const app:Application = express()
mainApp(app)

const server = app.listen(port, () => {
    console.log("")
    console.log("Server is live", port)
});

process.on("uncaughtException", (error) => {
    console.log("uncaughtException", error)

    process.exit(1);
});

process.on("unhandledRejection", (reason) =>{
    console.log("unhandledRejection", reason)

    server.close(() => {
        process.exit(1)
    });
});