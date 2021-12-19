export class Report {
    _id?: string;
    reportid: string;
    employee: string;
    date: Date;
    view: boolean;

    constructor(reportid: string, employee: string, date: Date, view: boolean, id?: string) {
        this.reportid = reportid;
        this.employee = employee;
        this.date = date;
        this.view = view;
        this._id = id;
    }
}