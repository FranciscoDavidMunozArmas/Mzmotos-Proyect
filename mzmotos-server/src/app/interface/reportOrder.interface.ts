import { Order } from "./order.interface";
import { Report, reportConverter } from "./report.interface";

export interface ReportOrder extends Report {
    salesman: string,
    orderId: number
}

export const reportOrder = {
    convertJSON: (json: any) => {
        return {
            ...reportConverter.convertJSON(json),
            salesman: json.salesman,
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