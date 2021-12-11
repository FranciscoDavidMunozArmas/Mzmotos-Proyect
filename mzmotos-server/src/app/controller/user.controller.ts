import { Request, Response } from 'express';
import userSchema from '../schemas/user.schema';
import bcryptjs from 'bcryptjs';
import { userConverter } from '../interface/user.interface';
import { tokenize } from '../../lib/token';

const saltRounds = 10;

export const createUser = async (username: string, password: string, role: string) => {
    try {
        const data = userConverter.convertJSON({
            username,
            password: bcryptjs.hashSync(password, saltRounds),
            role
        })        
        const mongoData = await userSchema.create(data);
        const user = userConverter.convertJSON(mongoData);
        return user._id;
    } catch (error: any) {
        console.log(error.message);
        return null;
    }
}

export const updateUser = async (_id: string, username: string, password: string, role: string) => {
    try {
        const data = userConverter.convertJSON({
            username,
            password: bcryptjs.hashSync(password, saltRounds),
            role
        })        
        const mongoData = await userSchema.findByIdAndUpdate(_id, data, { new: true });
        const user = userConverter.convertJSON(mongoData);
        return user._id;
    } catch (error: any) {
        console.log(error.message);
        return null;
    }
}

export const deleteUser = async (id: string) => {
    try {
        await userSchema.findByIdAndDelete(id);
        return true;
    } catch (error: any) {
        console.log(error.message);
        return false;
    }
}


export const getUsers = async (req: Request, res: Response) => {
    try {
        const mongoData: any[] = await userSchema.find();
        const users: any[] = mongoData.map((data: any) => userConverter.convertJSON(data));
        return res.status(200).json(users);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const deleteUsers = async (req: Request, res: Response) => {
    try {
        const response = await userSchema.deleteMany({});
        if (response) {
            return res.status(200).json({ message: "All users have been deleted" });
        }
        return res.status(200).json({ message: "Something went wrong" });
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const mongoData = await userSchema.findById(id);
        const user = userConverter.convertJSON(mongoData);
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const mongoData = await userSchema.findByIdAndDelete(id);
        const user = userConverter.convertJSON(mongoData);
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const signin = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        let result: boolean = false;
        let token: string = "";
        const user = await userSchema.findOne({username});
        if (user) {
            result = bcryptjs.compareSync(password, user?.password as string);
            if(result){
                token = user.username as string;
            }
        }
        return res.status(200).json(tokenize(token));
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}