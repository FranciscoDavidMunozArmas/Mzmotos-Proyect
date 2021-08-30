import { Document } from "mongoose";
import { Product } from "./product";

export interface Client extends Document{
    _id?:string,
    RUC:string,
    name: string,
    address:string,
    city: string,
    products: Product[]
}