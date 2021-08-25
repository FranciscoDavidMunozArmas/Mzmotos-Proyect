import { Request, Response } from "express";
import { Appointment } from "../interfaces/appointment";
import salesmanSchema from "../schemas/salesman.schema";

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const { salesmanid } = req.params;
        const salesman = await salesmanSchema.findById(salesmanid);
        const appointments = salesman?.appointments;
        return res.status(200).json(appointments);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const deleteAppointments = async (req: Request, res: Response) => {
    try {
        const { salesmanid } = req.params;
        const salesman = await salesmanSchema.findByIdAndUpdate(salesmanid, { $pull: { appointments: {} } }, { new: true });
        return res.status(200).json(salesman?.appointments);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const postAppointment = async (req: Request, res: Response) => {
    try {
        const { salesmanid } = req.params;
        const appointment: Appointment = req.body;
        const updateSalesman = await salesmanSchema.findByIdAndUpdate(salesmanid, {
            $push: {
                appointments: [appointment]
            }
        }, { new: true });
        return res.status(200).json(updateSalesman);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getAppointment = async (req: Request, res: Response) => {
    try {
        const { salesmanid, appointmentid } = req.params;
        const salesman = await salesmanSchema.findById(salesmanid);
        if (salesman) {
            const appointment = salesman.appointments.find((element: Appointment) => element._id == appointmentid);
            return res.status(200).json(appointment);
        }
        return res.status(200).json({ message: "Data not found" });
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const putAppointments = async (req: Request, res: Response) => {
    try {
        const { salesmanid, appointmentid } = req.params;
        const appointment: Appointment = req.body;
        const salesman = await salesmanSchema.findOneAndUpdate(
            { _id: salesmanid, "appointments._id": appointmentid },
            { $set: { "appointments.$": appointment } },
            { new: true });
        return res.status(200).json(salesman?.appointments);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const deleteAppointment = async (req: Request, res: Response) => {
    try {
        const { salesmanid, appointmentid } = req.params;
        const salesman = await salesmanSchema.findOneAndUpdate(
            { _id: salesmanid },
            { $pull: { appointments: { _id: appointmentid } } },
            { new: true });
        return res.status(200).json({ message: "Appointment deleted", itemID: appointmentid});
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}