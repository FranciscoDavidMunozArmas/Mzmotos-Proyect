import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/lib/constants';
import { Salesman } from '../models/Salesman';

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  constructor(private http: HttpClient) {
  }

  getSalesmen() {
    return this.http.get(`${CONSTANTS.API_URL}/salesmen`);
  }

  getSalesman(id: string) {
    return this.http.get(`${CONSTANTS.API_URL}/salesmen/${id}`);
  }

  getSalesmanbyName(username: string) {
    return this.http.get<Salesman>(`${CONSTANTS.API_URL}/salesmen/username/${username}`);
  }

  postSalesman(salesman: Salesman) {
    return this.http.post(`${CONSTANTS.API_URL}/salesmen`, salesman);
  }

  putSalesman(id: string, salesman: Salesman) {
    return this.http.put(`${CONSTANTS.API_URL}/salesmen/${id}`, salesman);
  }

  deleteSalesman(id: string) {
    return this.http.delete(`${CONSTANTS.API_URL}/salesmen/${id}`);
  }

  deleteSalesmen() { 
    return this.http.delete(`${CONSTANTS.API_URL}/salesmen`);
  }
}
