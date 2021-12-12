import { Schema, model } from "mongoose";
import { Order } from "../interface/order.interface";

const schema = new Schema({
    orderId: String,
    salesman: String,
    date: {
        type: Date,
        default: Date.now
    },
    client: {
        type: {
            RUC: String,
            name: String,
            address: String,
            city: String
        },
        required: true
    },
    list: {
        type: [{
            product: {
                productid: {
                    type: String
                },
                name: String,
                image: String,
                price: Number,

            },
            quantity: Number
        }],
        required: true
    },
    total: Number
},
    {
        timestamps: false,
        versionKey: false
    });

export default model<Order>('order', schema)