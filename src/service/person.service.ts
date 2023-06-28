import { person } from "../protocols/index";
import * as personRepository from "../repository/person.repository"
import { randomNumber } from "../utils/index";

export async function randomizedPerson():Promise<person>{
    const persons = await personRepository.getPerson();

    return  persons[randomNumber(persons.length)]
}