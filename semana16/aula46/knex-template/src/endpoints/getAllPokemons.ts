import {Request, Response} from "express";
import { getPokemons } from "../data/getPokemons";
import { Pokemon } from "../types";


export const getAllPokemons = async (req: Request, res: Response) => {
    try {

      const pokemons: Pokemon[] = await getPokemons()//se eu não colocar o await ele fica gaurdando a própria promise e não o resultado dela
 
       if (!pokemons.length) {
          res.statusCode = 404
          throw new Error("No pokemons found")
       }
 
       res.status(200).send(pokemons)
 
    } catch (error) {
       console.log(error)
       res.send(error.message)
    }
 }