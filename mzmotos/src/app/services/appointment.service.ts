import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/Appointment';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends Service {

  constructor(private http: HttpClient) {
    super();
    super.expandURI("/user/appointments");
  }

  getClients(salesmanid: string) {
    return this.http.get(`${super.getURI()}/${salesmanid}`);
  }

  getAppointment(salesmanid: string, appointmentid: string) {
    return this.http.get(`${super.getURI()}/${salesmanid}/${appointmentid}`);
  }

  postAppointment(salesmanid: string, appointment: Appointment) {
    return this.http.post(`${super.getURI()}/${salesmanid}`, appointment);
  }

  putAppointment(salesmanid: string, appointmentid: string, appointment: Appointment) {
    return this.http.put(`${super.getURI()}/${salesmanid}/${appointmentid}`, appointment);
  }

  deleteAppointment(salesmanid: string, appointmentid: string) {
    return this.http.delete(`${super.getURI()}/${salesmanid}/${appointmentid}`);
  }

  deleteClients(salesmanid: string) { 
    return this.http.delete(`${super.getURI()}/${salesmanid}`);
  }

}
