import { Request, Response } from "express";
import productSchema from "../schemas/product.schema";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await productSchema.find();
        return res.status(200).json(products);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const deleteProducts = async (req: Request, res: Response) => {
    try {
        await productSchema.deleteMany({});
        return res.status(200).json({ message: "All items have been deleted"});
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const postProduct = async (req: Request, res: Response) => {
    try {
        const product = await productSchema.create(req.body);
        return res.status(200).json(product);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await productSchema.findById(id);
        if (product) {
            return res.status(200).json(product);
        }
        return res.status(200).json({ message: "Data not found" });
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const putProducts = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await productSchema.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json(product);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await productSchema.findByIdAndRemove(id);
        return res.status(200).json({ message: "Product deleted", itemID: id});
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}