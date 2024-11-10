import { Request, Response } from "express";
import { sidInitDatabase } from "../services/candidates";

export const sid = async (req:Request,res:Response) => {
    try {
        await sidInitDatabase()
        res.status(201)
    } catch (error) {
        console.log(error);
        res.status(500)
    }
}