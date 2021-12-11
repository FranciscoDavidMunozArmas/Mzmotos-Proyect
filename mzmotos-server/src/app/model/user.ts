export class User {

    _id?: string;
    username: string;
    password: string;
    role: string;

    constructor(username: string, password: string, role: string, _id?: string) {
        this.username = username;
        this.password = password;
        this.role = role;
        this._id = _id
    }
}

export const userConverter = {
    fromJSON(snapshot: any): User {
        return new User(
            snapshot.username,
            snapshot.password,
            snapshot.role,
            snapshot._id
        );
    },
    toJSON(user: User): any {
        return{
            username: user.username,
            password: user.password,
            role: user.role,
            _id: user._id
        }
    }
}