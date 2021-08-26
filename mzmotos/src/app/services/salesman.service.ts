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

  getSalesmen() {
    return this.http.get(super.getURI());
  }

  getSalesman(id: string) {
    return this.http.get(`${super.getURI()}/${id}`);
  }

  postSalesman(salesman: Salesman) {
    return this.http.post(super.getURI(), salesman);
  }

  putSalesman(id: string, salesman: Salesman) {
    return this.http.put(`${super.getURI()}/${id}`, salesman);
  }

  deleteSalesman(id: string) {
    return this.http.delete(`${super.getURI()}/${id}`);
  }

  deleteSalesmen() { 
    return this.http.delete(super.getURI());
  }
}
