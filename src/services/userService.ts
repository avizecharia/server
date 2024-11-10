import { compare, hash } from "bcrypt";
import User, { IUser } from "../models/user";
import { LoginDto, RegisterDto } from "../types/dto/userDto";



export const userLogin = async (user:LoginDto) => {
    try {
        const userFromDataBase = await User.findOne({username:user.username})
        if(!userFromDataBase){ throw new Error("user was not found")}
        const match = await compare(user.password,userFromDataBase.password)
        if(!match) throw new Error("wrong password")
        return userFromDataBase
    } catch (err) {
        return err
    }
}

export const createNewUser = async(user:RegisterDto) => {
    try {
        if(!user.password) throw new Error("Missing user data,[password] is require");
        
        const encPass = await hash(user.password, 10)
        user.password = encPass
        const newUser = new User(user)
        return await newUser.save()
    } catch (error) {
       throw new Error("can't create a new user")
    }
}