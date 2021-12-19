import { Client } from "./Client";

export class Appointment {
    _id?: string;
    client: Client;
    date: Date;
    state: boolean;

    constructor(client: Client, date: Date, state: boolean, id?: string) {
        this.client = client;
        this.date = date;
        this.state = state;
        this._id = id;
    }
}

export const appointmentConverter = {
    fromJSON: (json: any): Appointment => {
        return new Appointment(json.client, json.date, json.state, json._id);
    },
    toJSON: (appointment: Appointment): any => {
        return {
            client: appointment.client,
            date: appointment.date,
            state: appointment.state,
            _id: appointment._id
        };
    }
}