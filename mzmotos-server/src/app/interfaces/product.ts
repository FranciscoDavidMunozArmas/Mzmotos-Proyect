import { Document } from "mongoose";

export interface Product extends Document{
    _id?: string,
    productid: string,
    name: string,
    image: string,
    price: number
}