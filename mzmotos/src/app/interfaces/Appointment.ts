import { Client } from "./Client";

export interface Appointment {
    _id?: string,
    client: Client,
    date: Date,
    state: boolean
}