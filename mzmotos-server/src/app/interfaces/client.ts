import { Document } from "mongoose";

export interface Client extends Document{
    _id?:string,
    RUC:string,
    name: string,
    address:string,
    city: string,
}