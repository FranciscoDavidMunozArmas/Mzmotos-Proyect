import { Request, Response } from 'express';
import { orderConverter } from '../interface/order.interface';
import { reportInventoryConverter } from '../interface/reportInventory.interface';
import { reportOrderConverter } from '../interface/reportOrder.interface';
import reportOrderSchema from '../schemas/reportOrder.schema';

export const getReportOrders = async (req: Request, res: Response) => {
    try {
        const mongoData = await reportOrderSchema.find({});
        const data = mongoData.map(element => {
            const reportData: any = reportOrderConverter.convertJSON(element);
            const orderData: any = orderConverter.convertJSON(element);
            return reportOrderConverter.joinReportOrder(reportData, orderData);
        });
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const createReportOrder = async (req: Request, res: Response) => {
    try {
        const reportData: any = reportOrderConverter.convertJSON(req.body);
        const orderData: any = orderConverter.convertJSON(req.body);
        const data = reportOrderConverter.joinReportOrder(reportData, orderData);
        data.date = new Date();
        const mongoData = await reportOrderSchema.create(data);
        return res.status(200).json(mongoData);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getReportOrderById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const mongoData = await reportOrderSchema.findById(id);
        if (!mongoData) {
            return res.status(404).json({ message: "not found" });
        }
        return res.status(200).json(mongoData);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const updateReportOrderById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const oldData = await reportOrderSchema.findById(id);
        if (!oldData) {
            return res.status(404).json({ message: "not found" });
        }
        const reportData: any = reportOrderConverter.convertJSON(req.body);
        const orderData: any = orderConverter.convertJSON(req.body);
        const data: any = reportOrderConverter.joinReportOrder(reportData, orderData);
        data.date = oldData.date;
        const mongoData = await reportOrderSchema.findByIdAndUpdate(id, data, { new: true });
        return res.status(200).json(mongoData);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getReportInventories = async (req: Request, res: Response) => {
    try {
        const mongoData = await reportOrderSchema.find({});
        const data = mongoData.map(reportInventoryConverter.convertJSON);
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const createReportInventory = async (req: Request, res: Response) => {
    try {
        const data = reportInventoryConverter.convertJSON(req.body);
        data.date = new Date();
        const mongoData = await reportOrderSchema.create(data);
        return res.status(200).json(mongoData);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getReportInventoryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const mongoData = await reportOrderSchema.findById(id);
        if (!mongoData) {
            return res.status(404).json({ message: "not found" });
        }
        return res.status(200).json(mongoData);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const updateReportInventoryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const oldData = await reportOrderSchema.findById(id);
        if (!oldData) {
            return res.status(404).json({ message: "not found" });
        }
        const data = reportInventoryConverter.convertJSON(req.body);
        data.date = oldData.date;
        const mongoData = await reportOrderSchema.findByIdAndUpdate(id, data, { new: true });
        return res.status(200).json(mongoData);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}