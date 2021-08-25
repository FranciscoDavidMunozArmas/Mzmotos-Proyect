import { model, Schema } from "mongoose";
import { Salesman } from "../interfaces/salesman";

const schema = new Schema({
    username: {
        type: String,
        unique: true
    },
    id: String,
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
            client: {
                RUC: String,
                name: String,
                address: String,
                city: String
            }
        }
    ]
},
{
    timestamps: false,
    versionKey: false
});

export default model<Salesman>('salesman', schema)