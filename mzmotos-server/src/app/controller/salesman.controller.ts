import { Request, Response } from 'express';
import { Salesman } from '../model/salesman';
import salesmanSchema from '../schemas/salesman.schema';

export const getAll = async (req: Request, res: Response) => {
    try {
        const salesmen: Salesman[] = await salesmanSchema.find();
        return res.status(200).json(salesmen);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const post = async (req: Request, res: Response) => {
    try {
        const salesman: Salesman = await salesmanSchema.create(req.body)
        return res.status(200).json(salesman);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteAll = async (req: Request, res: Response) => {
    try {
        await salesmanSchema.deleteMany({});
        return res.status(200).json({ message: "All items have been deleted"});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getByUsername = async (req: Request, res: Response) => {
    try {
        const { username } = req.params;
        const salesman = await salesmanSchema.findOne({username: username});
        if (salesman) {
            return res.status(200).json(salesman);
        }
        return res.status(200).json({ message: "Item not found"});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const salesman = await salesmanSchema.findById(id)
        if (salesman) {
            return res.status(200).json(salesman);
        }
        return res.status(200).json({ message: "Item not found"});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const put = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const salesman = await salesmanSchema.findByIdAndUpdate(id, req.body, { new: true });
        if(salesman) {
            return res.status(200).json(salesman);
        }
        return res.status(200).json({ message: "Item not found"});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const salesman = salesmanSchema.findByIdAndDelete(id);
        return res.status(200).json(salesman);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}