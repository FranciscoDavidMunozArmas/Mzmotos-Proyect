import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/interfaces/Appointment';

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.css']
})
export class AgendaCardComponent implements OnInit {

  @Input() appointment: Appointment;
  @Input() disableDelete: any;
  @Output() notificationEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() updateEvent = new EventEmitter<any>();

  date: string;

  @ViewChild("agreeForm") agreeForm: ElementRef;
  @ViewChild("notifyForm") notifyForm: ElementRef;
  @ViewChild("appointmentForm") appointmentForm: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.setDate();
    console.log(this.disableDelete)
  }

  ngOnChange() {
    this.setDate();
  }

  setDate() {
    let auxDate = new Date(this.appointment.date);
    auxDate.setMonth(auxDate.getMonth() + 1);
    let hour = (auxDate.getHours() < 10)? "0" + auxDate.getHours().toString():auxDate.getHours().toString();
    let minutes = (auxDate.getMinutes() < 10)? "0" + auxDate.getMinutes().toString():auxDate.getMinutes().toString();
    let date = (auxDate.getDate() < 10)? "0" + auxDate.getDate().toString():auxDate.getDate().toString();
    let month = (auxDate.getMonth() < 10)? "0" + auxDate.getMonth().toString():auxDate.getMonth().toString();
    let year = (auxDate.getFullYear() < 10)? "0" + auxDate.getFullYear().toString():auxDate.getFullYear().toString();

    this.date = `${year}/${month}/${date}  ${hour}:${minutes}`
  }

  showAgreeForm() {
    this.triggerModal(this.agreeForm);
  }

  showNotifyForm() {
    this.triggerModal(this.notifyForm);
  }

  showAppointmentForm(){
    this.triggerModal(this.appointmentForm);
  }

  triggerModal(content: any) {
    this.modalService.open(content).result;
  }

  notify(application: string) {
    this.notificationEvent.emit();
    this.modalClose();
  }

  updateAppointment(appointment: Appointment) {
    this.appointment = appointment;
    this.updateEvent.emit(this.appointment);
    this.modalClose();
  }

  checkCard() {
    this.appointment.state = !this.appointment.state;
    this.updateEvent.emit(this.appointment)
  }

  deleteCard() {
    this.deleteEvent.emit(this.appointment);
    this.modalClose();
  }

  modalClose() {
    this.modalService.dismissAll();
  }

}
