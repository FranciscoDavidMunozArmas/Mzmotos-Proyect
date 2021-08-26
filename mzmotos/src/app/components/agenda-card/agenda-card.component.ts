import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/interfaces/Appointment';

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.css']
})
export class AgendaCardComponent implements OnInit {

  @Input() appointment: Appointment;
  date: string;

  @ViewChild("agreeForm") agreeForm: ElementRef;
  @ViewChild("notifyForm") notifyForm: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.setDate();
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

  triggerModal(content: any) {
    this.modalService.open(content).result;
  }

  notify(application: string) {
    this.modalClose();
  }

  deleteCard() {
    this.modalClose();
  }

  modalClose() {
    this.modalService.dismissAll();
  }

}
