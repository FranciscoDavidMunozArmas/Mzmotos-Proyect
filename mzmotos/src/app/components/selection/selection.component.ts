import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Client, clientConverter } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<any>();

  clients: Client[];

  constructor(
    private service: ClientService,
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.service.getClients()
    .subscribe(res => {
      if(res.length > 0) {
        this.clients = res.map(clientConverter.fromJSON);
      } else {
        this.clients = [];
      }
    });
  }

  close() {
    this.closeEvent.emit();
  }

}
