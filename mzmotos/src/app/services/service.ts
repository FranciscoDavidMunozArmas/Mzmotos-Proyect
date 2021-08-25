export class Service {

    private URI="http://localhost:3000"

    constructor() {}

    expandURI(uri: string) {
        this.URI = `${this.URI}${uri}`;
    }

    getURI() {
        return this.URI;
    }

}