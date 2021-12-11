import { Schema, model } from "mongoose";
import { Manager } from "../interface/manager.interface";

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

export default model<Manager>('user', schema)