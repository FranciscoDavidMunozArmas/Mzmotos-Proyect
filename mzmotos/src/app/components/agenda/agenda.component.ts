import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/interfaces/Appointment';
import { Salesman } from 'src/app/interfaces/Salesman';

import { salesman } from 'src/app/data/salesman';

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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getSalesman();
  }

  getSalesman() {
    this.salesman = salesman;
    this.appointments = this.salesman.appointments;
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
