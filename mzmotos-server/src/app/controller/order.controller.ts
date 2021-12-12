import { Request, Response } from 'express';
import constants from '../../lib/constants';

export const getOrders = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const createOrder = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteOrders = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const updateOrder = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteOrdersById = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getOrdersBySalesman = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteOrdersBySalesman = async (req: Request, res: Response) => {
    try {
        const data = {}
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}



