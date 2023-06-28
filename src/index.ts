import express, { json, Request, Response } from "express";
import httpStatus from "http-status";
import personRouter from "./router/person.router";


const app = express();
app.use(json());
app.get('/health', (req: Request, res: Response) =>
    res.status(httpStatus.OK).send("0k"));

app.use(personRouter)

const port: number = 5000;
app.listen(port, ()=>console.log('server up'))