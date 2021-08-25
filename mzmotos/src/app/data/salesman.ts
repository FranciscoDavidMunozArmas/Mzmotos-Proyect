import { Salesman } from "../interfaces/Salesman";

export const salesman:Salesman = {
    _id: '1',
    name: "Sample",
    surname: "Sample",
    username: "User sample",
    id: "1751990332",
    address: "Sample Adress",
    email: "sample@email.com",
    phone: "0999999999",
    appointments: [
        {
            _id: "1",
            date: new Date("2021/08/12"),
            state: false,
            client: {
                _id: "1",
                name: "Sample client",
                RUC: "1751990332001",
                address: "Sample Address",
                city: "Sample City"
            }
        },
        {
            _id: "2",
            date: new Date("2021/08/12"),
            state: false,
            client: {
                _id: "1",
                name: "Sample client 2",
                RUC: "1751990456001",
                address: "Sample Address",
                city: "Sample City"
            }
        },
        {
            _id: "3",
            date: new Date("2021/08/12"),
            state: false,
            client: {
                _id: "1",
                name: "Sample client 3",
                RUC: "0604704015001",
                address: "Sample Address",
                city: "Sample City"
            }
        }
    ]
}