import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/lib/constants';
import { Salesman } from '../interfaces/Salesman';

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  constructor(private http: HttpClient) {
  }

  getSalesmen() {
    return this.http.get(`${CONSTANTS.URI_PATH}/salesmen`);
  }

  getSalesman(id: string) {
    return this.http.get(`${CONSTANTS.URI_PATH}/salesmen/${id}`);
  }

  getSalesmanbyName(username: string) {
    return this.http.get<Salesman>(`${CONSTANTS.URI_PATH}/salesmen/username/${username}`);
  }

  postSalesman(salesman: Salesman) {
    return this.http.post(`${CONSTANTS.URI_PATH}/salesmen`, salesman);
  }

  putSalesman(id: string, salesman: Salesman) {
    return this.http.put(`${CONSTANTS.URI_PATH}/salesmen/${id}`, salesman);
  }

  deleteSalesman(id: string) {
    return this.http.delete(`${CONSTANTS.URI_PATH}/salesmen/${id}`);
  }

  deleteSalesmen() { 
    return this.http.delete(`${CONSTANTS.URI_PATH}/salesmen`);
  }
}
