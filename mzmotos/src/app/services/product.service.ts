import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(super.getURI());
  }

  postProduct(product: Product) {
    return this.http.post(super.getURI(), product);
  }

  deleteProducts() {
    return this.http.delete(super.getURI());
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${super.getURI()}/${id}`);
  }

  putProduct(id: string, product: Product) {
    return this.http.put(`${super.getURI()}/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${super.getURI()}/${id}`);
  }
}
