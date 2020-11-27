import {Request, Response} from "express"
import { searchActorWithQueryParam } from "../data/searchActorWithQueryParam";


export const getAtorByQueryParam= async (req: Request, res: Response) => {
    try {
      const genero = req.params.genero;
      const ator = await searchActorWithQueryParam(genero);
        res.status(200).send(ator)
    } catch (err) {
         res.status(400).send({
            message: err.message,
      });
    }
  };
  