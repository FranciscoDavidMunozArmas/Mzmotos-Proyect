import { Request, Response } from 'express';
import { clientConverter } from '../model/client';
import clientSchema from '../schemas/client.schema';

export const getAll = async (req: Request, res: Response) => {
    try {
        const mongoData: any[] = await clientSchema.find();
        const clients: any[] = mongoData.map((client: any) => {
            return clientConverter.toJSON(clientConverter.fromJSON(client));
        });
        return res.status(200).json(clients);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const postClient = async (req: Request, res: Response) => {
    try {
        const client: any = clientConverter.fromJSON(req.body);
        const mongoData: any = await clientSchema.create(client.toJSON(client));
        return res.status(200).json(mongoData);
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
        return res.status(200).json({ message: "All items have been delete" });
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
        if (client) {
            return res.status(200).json(client);
        }
        return res.status(200).json({ message: "Item not found" });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const putClient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const client: any = clientConverter.fromJSON(req.body);
        const mongoData = await clientSchema.findByIdAndUpdate(id, clientConverter.toJSON(client), { new: true });
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

export const deleteByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const client = await clientSchema.findByIdAndDelete(id)
        if (client) {
            return res.status(200).json(client);
        }
        return res.status(200).json({ message: "Item not found" });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}