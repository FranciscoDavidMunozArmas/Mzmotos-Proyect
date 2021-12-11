import { model, Schema } from "mongoose";
import { Salesman } from "../interface/salesman.interface";

const schema = new Schema({
    username: {
        type: String,
        unique: true
    },
    userid: String,
    name: String,
    surname: String,
    address: String,
    phone: String,
    email: String,
    appointments: [
        {
            date: Date,
            state: {
                type: Boolean,
                default: false
            },
            client: String
        }
    ]
},
{
    timestamps: false,
    versionKey: false
});

export default model<Salesman>('salesman', schema)