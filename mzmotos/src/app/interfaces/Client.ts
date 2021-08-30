import { Product } from "./Product";

export interface Client {
    _id?:string,
    RUC:string,
    name: string,
    address:string,
    city: string,
    products: [{
        _id?: string,
        product: Product,
        qty: number
    }]
}