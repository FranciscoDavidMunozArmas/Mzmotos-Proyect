import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[]
  qty: number[]

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients()
      .subscribe(res => {
        this.clients = res;
        this.getQuantity();
      })
  }

  getQuantity() {
    this.qty = this.clients.map((element: Client) => {
      const sample = element.products.map((element: any) => element.qty);
      return (sample.length !== 0) ? sample.reduce((acc: any, curr: any) => acc + curr) : 0;
    });

    for(let [index, client] of this.clients.entries()) {
      console.log(index);
      console.log(client);
    }
  }

}
