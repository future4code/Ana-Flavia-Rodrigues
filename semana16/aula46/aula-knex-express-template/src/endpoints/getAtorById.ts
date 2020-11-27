import {Request, Response} from "express"
import { searchActorById } from "../data/searchActorById";
import { searchAllActor } from "../data/searchAllActor";
import { Actor } from "../types";


export const getAtorById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await searchActorById(id);
        res.status(200).send(actor[0])
    } catch (err) {
         res.status(400).send({
            message: err.message,
      });
    }
  };
  