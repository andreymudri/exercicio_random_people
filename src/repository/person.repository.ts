import { db } from "../database/database";
import { person } from "../protocols/index";


export async function getPerson(): Promise<person[]> {
    try {
        
        const persons = await db.query(`SELECT * FROM people;`);

        return persons.rows;
    } catch (error) {
        throw new Error("deu ruim")
    }
}