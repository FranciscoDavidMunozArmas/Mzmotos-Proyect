import { Request, Response } from 'express';
import { Client } from '../interfaces/client';
import { Product } from '../interfaces/product';
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
        await clientSchema.deleteMany({ });
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

export const put = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const client = await clientSchema.findByIdAndUpdate(id, req.body, { new: true });
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

export const getProducts = async (req: Request, res: Response) => {
    try {
        const { clientid } = req.params;
        const client = await clientSchema.findById(clientid);
        const products = client?.products;
        return res.status(200).json(products);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const postProduct = async (req: Request, res: Response) => {
    try {
        const { clientid } = req.params;
        const product: Product = req.body;
        const updateClient = await clientSchema.findByIdAndUpdate(clientid, {
            $push: {
                products: [product]
            }
        }, { new: true });
        return res.status(200).json(updateClient);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteProducts = async (req: Request, res: Response) => {
    try {
        const { clientid } = req.params;
        const updateClient = await clientSchema.findByIdAndUpdate(clientid, {
            $pull: { products: {} } 
        }, { new: true });
        return res.status(200).json(updateClient?.products);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getProduct = async (req: Request, res: Response) => {
    try {
        const { clientid, productid } = req.params;
        const client = await clientSchema.findById(clientid);
        if (client) {
            const product = client.products.find((element: Product) => element._id === productid);
            return res.status(200).json(product);
        }
        return res.status(200).json({ message: "Data not found" });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const putProduct = async (req: Request, res: Response) => {
    try {
        const { clientid, productid } = req.params;
        const product: Product = req.body;
        const client = await clientSchema.findOneAndUpdate(
            { _id: clientid, "products._id": productid },
            { $set: { "products.$": product } },
            { new: true });
        return res.status(200).json(client?.products);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { clientid, productid } = req.params;
        const client = await clientSchema.findOneAndUpdate(
            { _id: clientid },
            { $pull: { products: { _id: productid } } },
            { new: true });
        return res.status(200).json({ message: "Prodcut deleted", itemID: productid});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}