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

  async getClients(salesmanid: string) {
    return await this.http.get(`${super.getURI()}/${salesmanid}`);
  }

  async getAppointment(salesmanid: string, appointmentid: string) {
    return await this.http.get(`${super.getURI()}/${salesmanid}/${appointmentid}`);
  }

  async postAppointment(salesmanid: string, appointment: Appointment) {
    return await this.http.post(`${super.getURI()}/${salesmanid}`, appointment);
  }

  async putAppointment(salesmanid: string, appointmentid: string, appointment: Appointment) {
    return await this.http.put(`${super.getURI()}/${salesmanid}/${appointmentid}`, appointment);
  }

  async deleteAppointment(salesmanid: string, appointmentid: string) {
    return await this.http.delete(`${super.getURI()}/${salesmanid}/${appointmentid}`);
  }

  async deleteClients(salesmanid: string) { 
    return await this.http.delete(`${super.getURI()}/${salesmanid}`);
  }

}
