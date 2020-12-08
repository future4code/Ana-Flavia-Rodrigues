
import { connection } from "..";
import { Actor } from "../types";


export async function searchAllActor(): Promise<Actor[]>{
    try {
        
        const result = await connection.raw(`
        SELECT * FROM Ator ; 
    `)
        return result
    } catch (error) {
        console.log(error)
        return []
    }
}