import { Client, clientConverter } from "./client";

export class Appointment {
    _id?: string;
    date: Date;
    state: boolean;
    client: Client;

    constructor(date: Date, state: boolean, client: Client, _id?: string) {
        this.date = date;
        this.state = state;
        this.client = client;
        this._id = _id
    }
}

export const appointmentConverter = {
    toJSON(appointment: Appointment) {
        return {
            _id: appointment._id,
            date: appointment.date,
            state: appointment.state,
            client: clientConverter.toJSON(appointment.client)
        };
    },
    fromJSON(json: any): Appointment {
        return new Appointment(
            json.date,
            json.state,
            clientConverter.fromJSON(json.client),
            json._id
        );
    }
}