import { Request, Response } from "express";
import { getCandidateList, sidInitDatabase } from "../services/candidates";

export const sid = async (req:Request,res:Response) => {
    try {
        await sidInitDatabase()
        res.status(201)
    } catch (error) {
        console.log(error);
        res.status(500)
    }
}

export const getList = async(req:Request,res:Response) => {
    try {
        const list = await getCandidateList()
        res.status(200).json(list)
    } catch (error) {
        res.status(400).json({error})
    }
}