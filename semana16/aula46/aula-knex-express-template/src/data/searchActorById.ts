
import { connection } from "..";
import { Actor } from "../types";


export async function searchActorById(id: string): Promise<Actor[]>{
    // try {
        
    //     const result = await connection.raw(`
    //     SELECT * FROM Ator WHERE id = '${id}'; 
    // `)
    //     return result 
    // } catch (error) {
    //     console.log(error)
    //     return []
    // }

    try {
        
        const result = await connection
        .select("*")
        .from("Ator")
        .where("id", `${id}`)
        console.log(result)
        return result
       
    } catch (error) {
        console.log(error)
        return []
        
    }
    

}