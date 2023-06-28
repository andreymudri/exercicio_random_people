import  httpStatus  from 'http-status';
import { Request, Response } from "express";
import { person } from "../protocols/index";
import * as personService from "../service/person.service"


export async function getPerson(req: Request, res: Response):Promise<person>{
    const result = await personService.randomizedPerson()
    res.status(httpStatus.OK).send(result);
    return
}




