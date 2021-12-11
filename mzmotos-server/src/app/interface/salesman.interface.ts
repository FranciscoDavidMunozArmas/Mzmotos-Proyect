import { Document } from "mongoose"
import { Appointment } from "./appointment.interface"

export interface Salesman extends Document {
    userid:string,
    username:string,
    name: string,
    surname: string,
    address: string,
    phone: string,
    email: string,
    appointments: Appointment[]
}