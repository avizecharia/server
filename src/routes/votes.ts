import { Request, Response } from "express";
import voteDto from "../types/dto/vodeDto";
import { voteService } from "../services/vote";
import { Schema } from "mongoose";

export const voteRoute = async (req: Request, res: Response) => {
  try {
    const vote: voteDto = {
      userId:(req as any).user.user_id,
      candidateId:req.params.id  ,
    };
  
    const result = await voteService(vote);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ err });
  }
};
