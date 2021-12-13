import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/lib/constants';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(`${CONSTANTS.URI_PATH}/products`);
  }

  postProduct(product: Product) {
    return this.http.post(`${CONSTANTS.URI_PATH}/products`, product);
  }

  deleteProducts() {
    return this.http.delete(`${CONSTANTS.URI_PATH}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${CONSTANTS.URI_PATH}/products/${id}`);
  }

  putProduct(id: string, product: Product) {
    return this.http.put(`${CONSTANTS.URI_PATH}/products/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${CONSTANTS.URI_PATH}/products/${id}`);
  }
}
