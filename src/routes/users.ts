import { Request, Response } from "express";
import { createNewUser, userLogin } from "../services/userService";
import { LoginDto, RegisterDto } from "../types/dto/userDto";

export const login = async(req:Request<LoginDto>,res:Response)=>{
    try {
        const result =  await userLogin(req.body)
        res.status(200).json({result})
    } catch (err) {
        res.status(400).json(err)
    }
}


export const register = async(req:Request<RegisterDto>,res:Response)=>{
    try {
        const result = await createNewUser(req.body)
        res.status(201).json({
            result
        })
        
    } catch (err) {
        res.status(500).json({
            err
        })
        console.log(err);
        
    }
}