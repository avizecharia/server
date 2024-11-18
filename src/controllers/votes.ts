import { Router } from "express";
import verifyUser from "../middlewares/verifyUser";
import { voteRoute } from "../routes/votes";

const router = Router()

router.put('/:id',verifyUser,voteRoute)

export default router