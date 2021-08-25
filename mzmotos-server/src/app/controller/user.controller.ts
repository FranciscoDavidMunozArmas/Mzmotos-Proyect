import { Request, Response } from 'express';
import userSchema from '../schemas/user.schema';
import bcryptjs from 'bcryptjs';
import { User } from '../interfaces/user';


const saltRounds = 10;

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await userSchema.find();
        return res.status(200).json(users);
    } catch (error) {
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
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const postUser = async (req: Request, res: Response) => {
    try {
        let { password } = req.body;
        password = bcryptjs.hashSync(password, bcryptjs.genSaltSync(saltRounds));
        const user = {
            username: req.body.username,
            password: password,
            role: req.body.role
        };
        const newUser = await userSchema.create(user);
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await userSchema.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const putUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user: User = req.body;
        const updatedUser = await userSchema.findByIdAndUpdate(id, user, { new: true });
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteUser = await userSchema.findByIdAndDelete(id);
        return res.status(200).json(deleteUser);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const allowAccess = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        let result: boolean = false;
        let token: string = "";
        const user = await userSchema.findOne({username});
        if (user) {
            result = bcryptjs.compareSync(password, user?.password as string);
            if(result){
                token = user._id as string;
            }
        }
        return res.status(200).json({ token: token, role: user?.role });
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}