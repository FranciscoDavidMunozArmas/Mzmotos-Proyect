import { Request, Response } from 'express';
import { Client } from '../interfaces/client';
import clientSchema from '../schemas/client.schema';

export const getAll = async (req: Request, res: Response) => {
    try {
        const clients: Client[] = await clientSchema.find();
        return res.status(200).json(clients);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const post = async (req: Request, res: Response) => {
    try {
        const client: Client = await clientSchema.create(req.body);
        return res.status(200).json(client);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteAll = async (req: Request, res: Response) => {
    try {
        await clientSchema.deleteMany({});
        return res.status(200).json({ message: "All items have been delete"});
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
        const client = await clientSchema.findById(id);
        if(client) {
            return res.status(200).json(client);
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
        const { id } = req.params;
        const client = await clientSchema.findByIdAndUpdate(id, req.body, { new: true });
        if(client) {
            return res.status(200).json(client);
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
        const client = await clientSchema.findByIdAndDelete(id)
        if(client) {
            return res.status(200).json(client);
        }
        return res.status(200).json({ message: "Item not found"});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}