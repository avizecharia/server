import { Mongoose, Schema, Types } from "mongoose";
import Candidate, { ICandidate } from "../models/candidate"

import User, { IUser } from "../models/user";
import voteDto from "../types/dto/vodeDto";

export const voteService =async (vote:voteDto) => {
    try {
        
        const userFromDataBase : IUser | null = await User.findOne({_id:vote.userId})
        if (!userFromDataBase) throw new Error("user was not found");
          if (userFromDataBase.hasVoted) throw new Error("user All ready voted");
          const candidate:ICandidate | null = await Candidate.findOne({_id:vote.candidateId})
          if (!candidate) throw new Error("Candidate was not found");
          userFromDataBase.votedFor = candidate._id as Schema.Types.ObjectId
          userFromDataBase.hasVoted = true
          candidate.votes += 1  
          await userFromDataBase.save()
          await candidate.save()   
          return true
    } catch (error) {
        console.log(error);
        
    }

}