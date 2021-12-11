import { model, Schema } from "mongoose";
import { Client } from "./mongoose.interface";

const schema = new Schema({
    RUC: {
        type: String,
        unique: true
    },
    name: String,
    address: String,
    city: String,
    products: [
        {
            product: {
                productid: String,
                name: String,
                image: String,
                price: Number
            },
            qty: Number
        }
    ]
},
    {
        timestamps: false,
        versionKey: false
    });

export default model<Client>('client', schema)