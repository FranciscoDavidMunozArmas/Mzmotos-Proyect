import { Appointment } from "./Appointment";

export interface Salesman {
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