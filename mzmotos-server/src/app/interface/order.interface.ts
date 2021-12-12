import { Document } from "mongoose";
import { Client, clientConverter } from "./client.interface";
import { Product, productConverter } from "./product.interface";

interface ProductOrder {
    product: Product;
    quantity: number;
}

const productOrderConverter = {
    convertJSON: (json: any) => {
        return {
            product: productConverter.convertJSON(json.product),
            quantity: json.quantity
        };
    },
}

export interface Order extends Document {
    _id?: string,
    orderId: number,
    date: Date,
    client: Client,
    list: ProductOrder[],
    total: number
}

export const orderConverter = {
    convertJSON: (json: any) => {
        return {
            _id: json._id,
            orderId: json.orderId,
            date: json.date,
            client: clientConverter.convertJSON(json.client),
            list: json.list.map(productOrderConverter.convertJSON),
            total: json.total
        }
    }
}