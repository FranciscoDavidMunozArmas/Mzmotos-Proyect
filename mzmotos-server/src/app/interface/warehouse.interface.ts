import { Document } from "mongoose"

export interface Warehouse extends Document {
    userid:string,
    username:string,
    name: string,
    surname: string,
    address: string,
    phone: string,
    email: string
}