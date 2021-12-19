import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/models/Appointment';
import { Salesman } from 'src/app/models/Salesman';

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
  resultAppointments: Appointment[];
  todayappointments: Appointment[];
  appointmentDays: Date[];
  date: Date;
  showMore: Boolean = false;
  selectedDay: string;

  @ViewChild("setAppointment") setAppointment: ElementRef;
  @ViewChild("searchBox") searchBox: ElementRef;
  @ViewChild("allAppointmentsModal") allAppointmentsModal: ElementRef;
  @ViewChild("resultAppointment") resultAppointmentModal: ElementRef;


  private cookieName: string = "logged-user";
  private cookieRole: string = "role";

  constructor(private modalService: NgbModal,
    private cookie: CookieService,
    private router: Router,
    private salesmanService: SalesmanService,
    private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    // const name = this.cookie.get(this.cookieName);
    // const role = this.cookie.get(this.cookieRole);
    // if (!name || !role) {
    //   this.router.navigate(["/login"]);
    // }
    
    // this.getSalesman(name);
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
    this.selectedDay = this.dateToString(date);
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

  dateToString(date: Date): string {
    let day = (date.getDate() < 10)? "0" + date.getDate().toString():date.getDate().toString();
    let month = (date.getMonth() < 10)? "0" + date.getMonth().toString():date.getMonth().toString();
    let year = (date.getFullYear() < 10)? "0" + date.getFullYear().toString():date.getFullYear().toString();

    return `${year}/${month}/${day}`
  }

  setAppointmentDays() {
    this.appointmentDays = this.appointments.map((element: Appointment) => new Date(element.date));
  }

  setShowMore() {
    this.showMore = !this.showMore;
  }

  search(text: string) {
    this.resultAppointments = [];
    const regexRUC = /^[0-9]{13}$/;
    const regexDate = /^(?:[0-9]{2})?[0-9]{2}[-/][0-3]?[0-9][-/][0-3]?[0-9][\s*-\s*](?:[0-9]{2})?[0-9]{2}[-/][0-3]?[0-9][-/][0-3]?[0-9]$/;
    if(text.match(regexRUC)) {
      this.appointments.forEach((element: Appointment) => {
        if(element.client.RUC === text){
          this.resultAppointments.push(element);
        }
      });
    } else if (text.match(regexDate)) {
      let [lower, upper] = text.split('-').sort();
      const lowerDate = new Date(lower);
      const upperDate = new Date(upper);
      this.appointments.forEach((element: Appointment) => {
        const elementDate = new Date(element.date);
        if(
          (lowerDate.getFullYear() <= elementDate.getFullYear() && elementDate.getFullYear() <= upperDate.getFullYear()) &&
          (lowerDate.getMonth() <= elementDate.getMonth() && elementDate.getMonth() <= upperDate.getMonth()) &&
          (lowerDate.getDate() <= elementDate.getDate() && elementDate.getDate() <= upperDate.getDate())
        ){
          this.resultAppointments.push(element);
        }
      });
    } else {
      this.resultAppointments = this.appointments.filter((element: Appointment) => element.client.name === text)
    }
    this.modalClose();
    this.showResultAppointment();
    console.log(this.resultAppointments.length);
    console.log(this.resultAppointments);
  }

  showResultAppointment(){
    this.triggerModal(this.resultAppointmentModal);
  }

  showSetAppointmentModal() {
    this.triggerModal(this.setAppointment);
  }

  showAllAppointmentsModal() {
    this.triggerModal(this.allAppointmentsModal);
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
