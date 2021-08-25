import { Document } from "mongoose"
import { Appointment } from "./appointment";

export interface Salesman extends Document {
    _id?: string,
    username:string,
    id:string,
    name: string,
    surname: string,
    address: string,
    phone: string,
    email: string,
    appointments: Appointment[]
}