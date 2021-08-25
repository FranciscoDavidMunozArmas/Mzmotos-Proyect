import { Document } from "mongoose";
import { Client } from "./client";

export interface Appointment extends Document{
    _id?: string,
    date: Date,
    state: boolean,
    client: Client,
}