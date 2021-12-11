export class Client {
    
    _id?: string;
    RUC: string;
    name: string;
    address: string;
    city: string;

    constructor(RUC: string, name: string, address: string, city: string, _id?: string) {
        this.RUC = RUC;
        this.name = name;
        this.address = address;
        this.city = city;
        this._id = _id;
    }
}

export const clientConverter = {
    toJSON: function (client: Client) {
        return {
            _id: client._id,
            RUC: client.RUC,
            name: client.name,
            address: client.address,
            city: client.city
        };
    },
    fromJSON: function (json: any) {
        return new Client(
            json.RUC,
            json.name,
            json.address,
            json.city,
            json._id
        );
    }
}