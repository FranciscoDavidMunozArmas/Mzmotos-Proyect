import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/interfaces/Appointment';
import { Salesman } from 'src/app/interfaces/Salesman';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { SalesmanService } from 'src/app/services/salesman.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  salesman: Salesman;
  appointments: Appointment[];
  todayappointments: Appointment[];
  appointmentDays: Date[];
  date: Date;
  showMore: Boolean = false;

  @ViewChild("setAppointment") setAppointment: ElementRef;
  @ViewChild("searchBox") searchBox: ElementRef;


  private cookieName: string = "logged-user";
  private cookieRole: string = "role";

  constructor(private modalService: NgbModal,
    private cookie: CookieService,
    private router: Router,
    private salesmanService: SalesmanService,
    private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    const name = this.cookie.get(this.cookieName);
    const role = this.cookie.get(this.cookieRole);
    if (!name || !role) {
      this.router.navigate(["/login"]);
    }

    this.getSalesman(name);
  }

  getSalesman(name: string) {
    this.salesmanService.getSalesmanbyName(name)
    .subscribe(res => {
      this.salesman = res;
      this.appointments = res.appointments;
      this.setAppointmentDays();
      this.setTodayAppointment(new Date());
    });
  }

  addAppointment(appointment: Appointment) {
    this.appointmentService.postAppointment(this.salesman._id, appointment)
    .subscribe(res => {
      this.salesman = res;
      this.appointments = this.salesman.appointments;
      this.setAppointmentDays();
      this.setTodayAppointment(this.date);
      this.modalClose();
    });
  }

  removeAppointment(appointment: Appointment) {
    this.appointmentService.deleteAppointment(this.salesman._id, appointment._id)
    .subscribe(res => {
      this.appointments = this.salesman.appointments.filter((element: Appointment) => element._id !== appointment._id);
      this.setAppointmentDays();
      this.setTodayAppointment(this.date);
      this.modalClose();
    });
  }

  updateAppointement(appointment: Appointment) {
    this.appointmentService.putAppointment(this.salesman._id, appointment._id, appointment)
    .subscribe(
      res => {
        this.appointments = res;
        this.setAppointmentDays();
        this.setTodayAppointment(this.date);
      }
    );
  }

  setTodayAppointment(date: Date){
    this.todayappointments = [];
    this.date = date;
    this.appointments.forEach((element: Appointment) => {
      const elementDate = new Date(element.date);
      if(elementDate.getFullYear() === date.getFullYear() &&
      elementDate.getMonth() === date.getMonth() &&
      elementDate.getDate() === date.getDate()){
        this.todayappointments.push(element)
      }
    })
  }

  setAppointmentDays() {
    this.appointmentDays = this.appointments.map((element: Appointment) => new Date(element.date));
  }

  setShowMore() {
    this.showMore = !this.showMore;
  }

  search(text: string) {
    this.modalClose();
  }

  showSetAppointmentModal() {
    this.triggerModal(this.setAppointment);
  }

  showSearchBox() {
    this.triggerModal(this.searchBox);
  }

  triggerModal(content: any) {
    this.modalService.open(content).result;
  }

  modalClose() {
    this.modalService.dismissAll();
  }

}
