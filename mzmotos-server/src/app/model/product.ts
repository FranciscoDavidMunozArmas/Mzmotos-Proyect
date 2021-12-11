export class Product {

    _id?: string;
    productid: string;
    name: string;
    image: string;
    price: number;

    constructor(productid: string, name: string, image: string, price: number, _id?: string) {
        this.productid = productid;
        this.name = name;
        this.image = image;
        this.price = price;
        this._id = _id;
    }
}

export const productConverter = {
    toJSON(product: Product): any {
        return {
            _id: product._id,
            productid: product.productid,
            name: product.name,
            image: product.image,
            price: product.price
        };
    },
    fromJSON(snapshot: any): Product {
        return new Product(
            snapshot.productid,
            snapshot.name,
            snapshot.image,
            snapshot.price,
            snapshot._id
        );
    }
}