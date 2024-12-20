import express, { Application, Request, Response } from "express";
import cors from 'cors'
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express()

// parserrs
app.use(express.json())
app.use(cors())

// root
app.get("/", (req: Request, res: Response) => {
    res.send("Hello Server");
});

// all router
app.use('/api', router)

// global error handel 
app.use(globalErrorHandler)

// not found page
app.use(notFound)

export default app;



/* 
https://github.com/Apollo-Level2-Web-Dev/b4-assignment-3

*/