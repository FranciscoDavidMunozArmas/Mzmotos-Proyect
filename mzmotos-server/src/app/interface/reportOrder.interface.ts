import { Order } from "./order.interface";
import { Report, reportConverter } from "./report.interface";

export interface ReportOrder extends Report {
    salesman: string,
    customer: string,
    orderId: number
}

export const reportOrderConverter = {
    convertJSON: (json: any) => {
        return {
            ...reportConverter.convertJSON(json),
            salesman: json.salesman,
            customer: json.customer,
            orderId: json.orderId
        }
    },
    joinReportOrder: (report: ReportOrder, order: Order) => {
        return {
            ...report,
            ...order
        }
    }
}