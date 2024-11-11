import { compare, hash } from "bcrypt";
import User, { IUser } from "../models/user";
import { LoginDto, RegisterDto } from "../types/dto/userDto";
import jwt from "jsonwebtoken";

export const userLogin = async (user: LoginDto) => {
  try {
    const userFromDataBase = await User.findOne({ username: user.username }).lean();
    if (!userFromDataBase) {
      throw new Error("user was not found");
    }
    const match = await compare(user.password, userFromDataBase.password);
    if (!match) throw new Error("wrong password");
    const token = await jwt.sign(
      {
        user_id: userFromDataBase._id,
        isAdmin: userFromDataBase.isAdmin,
        username: userFromDataBase.username,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "10m" }
    );
    return {...userFromDataBase , token,password:"*******"};
  } catch (err) {
    throw err;
  }
};

export const createNewUser = async (user: RegisterDto) => {
  try {
    if (!user.password)
      throw new Error("Missing user data,[password] is require");

    const encPass = await hash(user.password, 10);
    user.password = encPass;
    const newUser = new User(user);
    return await newUser.save();
  } catch (error) {
    throw new Error("can't create a new user");
  }
};
