import cors from "cors";
import express, { Application, Request, Response } from "express";


export const mainApp = (app: Application)  => {
    app.use(express.json())
    .use(cors())
    .set("view engine", "ejs");

    app.get("/", (req:Request, res:Response) => {
        try {
            console.log("Welcome on Board!!")
        } catch (error) {
            console.log(error);
        }
    });

    app.use("/api/v1")
}







