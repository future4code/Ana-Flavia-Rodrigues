
import { connection } from "..";
import { Actor } from "../types";


export async function searchActorWithQueryParam(genero: string): Promise<Actor[]>{

    try {
        
        const result = await connection
        .select("*")
        .from("Ator")
        .where("gender", `${genero}`)
        console.log(result)
        return result
       
    } catch (error) {
        console.log(error)
        return []
        
    }
    

}