import {Request, Response} from "express"
import { pokemons } from ".."//"../index" quando eu não especifico a pasta ele procura no index
import { getPokemons } from "../data/getPokemos"
import { Pokemon } from "../types"

export const getAllPokemons = async (req: Request, res: Response) => { //async => representa uma funçãi assincron, importante para o uso do knex
    try {
 
        const pokemons: Pokemon[] = await getPokemons()

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