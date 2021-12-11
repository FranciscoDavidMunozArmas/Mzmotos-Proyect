import { Document } from "mongoose"

export interface Appointment extends Document{
    date: Date,
    state: boolean,
    client: Client,
}