import { Router } from "express";
import { getUser, login, register } from "../routes/users";
import verifyUser from "../middlewares/verifyUser";

const router = Router()

router.post("/login" , login)
router.post("/register" ,register)
router.get("/getuser" ,verifyUser,getUser)

export default router