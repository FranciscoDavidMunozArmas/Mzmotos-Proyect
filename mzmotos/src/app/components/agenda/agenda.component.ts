import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/interfaces/Appointment';
import { Salesman } from 'src/app/interfaces/Salesman';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { SalesmanService } from 'src/app/services/salesman.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  salesman: Salesman;
  appointments: Appointment[];
  date: Date;

  @ViewChild("setAppointment") setAppointment: ElementRef;
  @ViewChild("searchBox") searchBox: ElementRef;


  private cookieName: string = "logged-user";
  private cookieRole: string = "role";

  constructor(private modalService: NgbModal,
    private cookie: CookieService,
    private router: Router,
    private salesmanService: SalesmanService) { }

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
    });
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    this.modalClose();
  }

  setDate(date: Date) {
    this.date = date;
    console.log(date);
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
