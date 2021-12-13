import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/lib/constants';
import { Appointment } from '../interfaces/Appointment';
import { Salesman } from '../interfaces/Salesman';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) {}

  getAppointments(salesmanid: string) {
    return this.http.get(`/${CONSTANTS.API_URL}/salesmen/appointments/${salesmanid}`);
  }

  getAppointment(salesmanid: string, appointmentid: string) {
    return this.http.get(`/${CONSTANTS.API_URL}/salesmen/appointments/${salesmanid}/${appointmentid}`);
  }

  postAppointment(salesmanid: string, appointment: Appointment) {
    return this.http.post<Salesman>(`/${CONSTANTS.API_URL}/salesmen/appointments/${salesmanid}`, appointment);
  }

  putAppointment(salesmanid: string, appointmentid: string, appointment: Appointment) {
    return this.http.put<Appointment[]>(`/${CONSTANTS.API_URL}/salesmen/appointments/${salesmanid}/${appointmentid}`, appointment);
  }

  deleteAppointment(salesmanid: string, appointmentid: string) {
    return this.http.delete(`/${CONSTANTS.API_URL}/salesmen/appointments/${salesmanid}/${appointmentid}`);
  }

  deleteClients(salesmanid: string) { 
    return this.http.delete(`/${CONSTANTS.API_URL}/salesmen/appointments/${salesmanid}`);
  }

}
