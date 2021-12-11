import { Request, Response } from 'express';
import userSchema from '../schemas/user.schema';
import bcryptjs from 'bcryptjs';
import { userConverter } from '../model/user';

const saltRounds = 10;

export const getUsers = async (req: Request, res: Response) => {
    try {
        const mongoData: any[] = await userSchema.find();
        const users: any[] = mongoData.map((data: any) => {
            return userConverter.toJSON(userConverter.fromJSON(data));;
        });
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
        const user = userConverter.fromJSON(req.body);
        password = bcryptjs.hashSync(password, bcryptjs.genSaltSync(saltRounds));
        user.password = password;
        const newUser = await userSchema.create(userConverter.toJSON(user));
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const mongoData = await userSchema.findById(id);
        const user = userConverter.toJSON(userConverter.fromJSON(mongoData));
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const putUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = userConverter.fromJSON(req.body);
        const mongoData = await userSchema.findByIdAndUpdate(id, userConverter.toJSON(user), { new: true });
        return res.status(200).json(mongoData);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const mongoData = await userSchema.findByIdAndDelete(id);
        return res.status(200).json(mongoData);
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
                token = user.username as string;
            }
        }
        return res.status(200).json({ token: token, role: user?.role });
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}