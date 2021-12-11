import { model, Schema } from "mongoose";
import { Product } from "./mongoose.interface";

const schema = new Schema({
    productid: {
        type: String,
        unique: true
    },
    name: String,
    image: String,
    price: Number
},
{
    timestamps: false,
    versionKey: false
});

export default model<Product>('product', schema)