import { Appointment, appointmentConverter } from "./appointment";

export class Salesman{

    _id?: string;
    username:string;
    name: string;
    surname: string;
    address: string;
    phone: string;
    email: string;
    appointments: Appointment[];

    constructor(username:string, name:string, surname:string, address:string, phone:string, email:string, appointments:Appointment[], _id?:string){
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.appointments = appointments;
        this._id = _id;
    }
}

export const salesmanConverter = {
    toJSON(salesman: Salesman){
        return {
            username: salesman.username,
            name: salesman.name,
            surname: salesman.surname,
            address: salesman.address,
            phone: salesman.phone,
            email: salesman.email,
            appointments: salesman.appointments.map(appointment => appointmentConverter.toJSON(appointment)),
            _id: salesman._id
        }
    },
    fromJSON(json: any){
        return new Salesman(
            json.username,
            json.name,
            json.surname,
            json.address,
            json.phone,
            json.email,
            json.appointments,
            json._id
        );
    }
}