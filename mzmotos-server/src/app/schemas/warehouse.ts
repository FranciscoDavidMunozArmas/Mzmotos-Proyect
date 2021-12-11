import { Schema, model } from "mongoose";
import { Warehouse } from "../interface/warehouse.interface";

const schema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    role: String
},
{
    timestamps: false,
    versionKey: false
});

export default model<Warehouse>('user', schema)