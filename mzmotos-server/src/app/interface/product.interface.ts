import { Document } from "mongoose"

export interface Product extends Document{
    productid: string,
    name: string,
    image: string,
    price: number
}
