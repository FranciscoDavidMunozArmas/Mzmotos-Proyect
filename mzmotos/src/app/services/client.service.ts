import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../interfaces/Client';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends Service {

  constructor(private http: HttpClient) {
    super();
    super.expandURI("/client");
  }

  getClients() {
    return this.http.get<Client[]>(super.getURI());
  }
}
