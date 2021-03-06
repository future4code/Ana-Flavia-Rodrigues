import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Pokemon, POKE_TYPES } from "./types";
import { getAllPokemons } from "./endpoints/getAllPokemons";
import { createPokemons } from "./endpoints/createPokemos";
import knex from 'knex'
import { searchPokemonByName } from "./data/searchPokemonByName";
import dotenv from "dotenv"


dotenv.config()

export const connection = knex({ // Estabelece conexão com o banco
 client: "mysql",
 connection: {
 host:process.env.DB_HOST,
 port:3306,
 user:process.env.DB_USER,
 password:process.env.DB_PASSWORD,
 database:process.env.DB_NAME,
 }
})

const app: Express = express();

app.use(express.json());
app.use(cors())


app.get("/pokemon/all", getAllPokemons );

app.post("/pokemon/new", createPokemons );

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
}) 
searchPokemonByName("e")