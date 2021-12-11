import { Document } from "mongoose"

export interface User extends Document{
    username: string,
    password: string,
    role: string
}

export interface Appointment extends Document{
    date: Date,
    state: boolean,
    client: Client,
}

export interface Salesman extends Document {
    username:string,
    name: string,
    surname: string,
    address: string,
    phone: string,
    email: string,
    appointments: Appointment[]
}

export interface Client extends Document{
    RUC:string,
    name: string,
    address:string,
    city: string
}

export interface Product extends Document{
    productid: string,
    name: string,
    image: string,
    price: number
}