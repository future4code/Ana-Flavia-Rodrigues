import {connection} from '../index';
import { POKE_TYPES } from '../types';

export async function createPokemonTable():Promise<void>{
  
    try {
//essa função recebe uma query e espera a resposta
        await connection.raw(` 
            CREATE TABLE pokemons (
                id INT PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                type VARCHAR(255)
        );
        `)
        console.log("Sucesso!")

    } catch (error) {

        console.log(error)

    }

}
export async function createNewPokemonWithQueryBuilder(
    id: number,
    name: string,
    type: POKE_TYPES 
):Promise<void> {
    try {
        await connection
        .insert({
            id: id,
            name: name, 
            type: type
        })
        .into("pokemons")
        console.log("Sucesso!")
    } catch (error) {
        
        console.log(error)
    }
}
