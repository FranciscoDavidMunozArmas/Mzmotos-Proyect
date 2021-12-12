import { Request, Response } from 'express';

export const getReportOrders = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const createReportOrder = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getReportOrderById = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const updateReportOrderById = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getReportInventories = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const createReportInventory = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getReportInventoryById = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const updateReportInventoryById = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}