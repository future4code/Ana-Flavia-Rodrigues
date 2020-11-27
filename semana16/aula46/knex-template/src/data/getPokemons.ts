import { connection} from "../index";
import { Pokemon } from "../types";

export async function getPokemons(): Promise<Pokemon[]> {
try {
    const result = await connection.raw(`
        SELECT * FROM pokemons; 
    `)
    console.log(result)

    return result[0]//indice 0 para retornar só os pokemons e não as coisas que vem junto no array
    
} catch (error) {
    console.log(error)
    return []//a promise pede return inclusive no caso de erro
}

}