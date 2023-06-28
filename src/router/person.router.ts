import { getPerson } from "../controller/person.controller";
import express, { Router } from "express";

const personRouter = Router();


personRouter.get('/person',getPerson);

export default personRouter;