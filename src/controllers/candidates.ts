import { Router } from "express";
import { getList, sid } from "../routes/candidates";
import verifyAdmin from "../middlewares/verifyAdmin";
import verifyUser from "../middlewares/verifyUser";

const router = Router()

router.post("/sid" ,sid )
router.get("/",verifyUser,getList)

export default router