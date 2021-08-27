import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { Appointment } from 'src/app/interfaces/Appointment';
import { Client } from 'src/app/interfaces/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  @Input() appointment: Appointment;
  @Input() date: Date;

  @Output() saveEvent = new EventEmitter<any>();
  @Output() cancelEvent = new EventEmitter<any>();

  input = {
    clientId: "",
    date: ""
  }

  clients: Client[] = []
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
    // this.input.clientId = this.clients[0]._id;
    this.input.date = moment(new Date).format("YYYY-MM-DDTHH:MM");
    if(this.appointment) {
      this.input.clientId = this.appointment.client._id;
      this.input.date = moment(this.appointment.date).format("YYYY-MM-DDTHH:MM");
    }
    if(this.date) {
      this.input.date = moment(this.date).format("YYYY-MM-DDTHH:MM");
    }
  }

  onChange(value: any) {
  }

  getClients() {
    this.clientService.getClients()
    .subscribe(
      res => {
        this.clients = res;
        this.input.clientId = this.clients[0]._id;
      }
    )
  }

  submitForm(appointmentForm: NgForm) {
    const appointment: Appointment = {
      client: this.clients.find((element: Client) => element._id === appointmentForm.value.client),
      date: appointmentForm.value.date,
      state: false
    };
    this.saveEvent.emit(appointment);
  }

  cancelForm() {
    this.cancelEvent.emit();
  }

}
