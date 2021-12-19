import { Product, productConverter } from "./Product";
import { Report } from "./Report";

class ProductItem {
    product: Product;
    added: number;
    removed: number;

    constructor(product: any, added: number, removed: number) {
        this.product = productConverter.fromJSON(product);
        this.added = added;
        this.removed = removed;
    }
}

const ProductItemConverter = {
    fromJSON: (json: any): ProductItem => {
        return new ProductItem(json.product, json.added, json.removed);
    },
    toJSON: (productItem: ProductItem): any => {
        return {
            product: productConverter.toJSON(productItem.product),
            added: productItem.added,
            removed: productItem.removed
        };
    }
};

export class ReportInventory extends Report{
    items: ProductItem[];

    constructor(reportid: string, employee: string, date: Date, view: boolean, items: ProductItem[], id?: string) {
        super(reportid, employee, date, view, id);
        this.items = items;
    }
}

export const reportInventoryConverter = {
    fromJSON: (json: any): ReportInventory => {
        return new ReportInventory(json.reportid, json.employee, json.date, json.view, json.items, json._id);
    },
    toJSON: (reportInventory: ReportInventory): any => {
        return {
            reportid: reportInventory.reportid,
            employee: reportInventory.employee,
            date: reportInventory.date,
            view: reportInventory.view,
            items: reportInventory.items.map(ProductItemConverter.toJSON),
            _id: reportInventory._id
        };
    }
};