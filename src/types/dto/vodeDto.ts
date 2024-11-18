import { Types,Schema } from "mongoose";

export default interface voteDto {
    userId:string | Schema.Types.ObjectId,
    candidateId:string| Schema.Types.ObjectId
}