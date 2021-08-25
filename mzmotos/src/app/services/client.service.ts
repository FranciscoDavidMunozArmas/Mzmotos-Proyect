import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends Service {

  constructor(private http: HttpClient) {
    super();
    super.expandURI("/client");
  }

  async getClients() {
    return await this.http.get(super.getURI());
  }
}
