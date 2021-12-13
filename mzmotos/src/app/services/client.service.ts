import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/lib/constants';
import { Client } from '../interfaces/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get<Client[]>(`${CONSTANTS.URI_PATH}/clients`);
  }
}
