import { Request, Response } from 'express';
import constants from '../../lib/constants';
import { salesmanConverter } from '../interface/salesman.interface';
import { userConverter } from '../interface/user.interface';
import salesmanSchema from '../schemas/salesman.schema';
import { createUser, deleteUser, updateUser } from './user.controller';

const ROLE_SALESMAN = constants.ROLES[1];

export const getSalesmen = async (req: Request, res: Response) => {
    try {
        const mongoData: any[] = await salesmanSchema.find();
        const salesmen = mongoData.map(data => salesmanConverter.convertJSON(data));
        return res.status(200).json(salesmen);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const createSalesman = async (req: Request, res: Response) => {
    try {
        const data = userConverter.convertJSON(req.body);
        const userId = await createUser(data.username, data.password, ROLE_SALESMAN);
        if (userId) {
            const salesman = salesmanConverter.convertJSON(req.body);
            salesman.userid = userId;
            const mongoData: any = await salesmanSchema.create(salesman);
            return res.status(200).json(mongoData);
        }
        return res.status(400).json({
            message: "Something went wrong"
        });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteSalesmen = async (req: Request, res: Response) => {
    try {
        const monogData: any[] = await salesmanSchema.find();
        const salesmen = monogData.map(data => salesmanConverter.convertJSON(data));
        salesmen.forEach(async (salesman: any) => {
            await deleteUser(salesman.userid);
        });
        await salesmanSchema.deleteMany({});
        return res.status(200).json({ message: "All items have been deleted" });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getSalesmanByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const salesman = await salesmanSchema.findById(id)
        if (salesman) {
            return res.status(200).json(salesman);
        }
        return res.status(200).json({ message: "Item not found" });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const updateSalesman = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const salesman = salesmanConverter.convertJSON(req.body);
        const mongoData = await salesmanSchema.findByIdAndUpdate(id, salesman, { new: true });
        if (mongoData) {
            return res.status(200).json(mongoData);
        }
        return res.status(200).json({ message: "Item not found" });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const updatePassword = async (req: Request, res: Response) => {
    try {
        const { username } = req.params
        const data = userConverter.convertJSON(req.body);
        const mongoData = await salesmanSchema.findOne({ username: username });
        const salesman = salesmanConverter.convertJSON(mongoData);
        const userID = await updateUser(salesman.userid, data.username, data.password, ROLE_SALESMAN);
        if (userID) {
            return res.status(200).json({ message: "Password has been updated" });
        }
        return res.status(200).json({ message: "Item not found" });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteSalesmanByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const mongoData = await salesmanSchema.findById(id);
        const salesman = salesmanConverter.convertJSON(mongoData);
        const data = await deleteUser(salesman.userid);
        if (data) {
            await salesmanSchema.findByIdAndDelete(id);
            return res.status(200).json({ message: "Item has been deleted" });
        }
        return res.status(400).json({ message: "Something went wrong", });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getSalesmanByUsername = async (req: Request, res: Response) => {
    try {
        const { username } = req.params;
        const mongoData = await salesmanSchema.findOne({ username: username });
        if (mongoData) {
            const salesman = salesmanConverter.convertJSON(mongoData);
            return res.status(200).json(salesman);
        }
        return res.status(200).json({ message: "Item not found" });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}