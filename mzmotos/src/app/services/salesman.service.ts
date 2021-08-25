import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salesman } from '../interfaces/Salesman';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class SalesmanService extends Service {

  constructor(private http: HttpClient) {
    super();
    super.expandURI("/salesmen")
  }

  async getSalesmen() {
    return await this.http.get(super.getURI());
  }

  async getSalesman(id: string) {
    return await this.http.get(`${super.getURI()}/${id}`);
  }

  async postSalesman(salesman: Salesman) {
    return await this.http.post(super.getURI(), salesman);
  }

  async putSalesman(id: string, salesman: Salesman) {
    return await this.http.put(`${super.getURI()}/${id}`, salesman);
  }

  async deleteSalesman(id: string) {
    return await this.http.delete(`${super.getURI()}/${id}`);
  }

  async deleteSalesmen() { 
    return await this.http.delete(super.getURI());
  }
}
