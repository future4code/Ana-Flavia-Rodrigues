import express, { Request, Response } from "express";
import { searchAllActor } from "../data/searchAllActor";
import { Actor } from "../types";


export const testEndpoint = async (req: Request, res: Response) => {
    try {
      const atores : Actor[] = await searchAllActor()
      res.status(200).send(atores)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }
  