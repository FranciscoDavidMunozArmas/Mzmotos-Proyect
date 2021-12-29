import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/lib/auth.service';
import { decode } from 'src/lib/token';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  products: Product[];
  private token: any;

  constructor(
    private service: ProductService, 
    private auth: AuthService) { }

  ngOnInit(): void {
    this.token = decode(this.auth.getToken());
    this.products = [];
    this.getProducts();
  }

  getProducts() {
    this.service.getProducts()
    .subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }

}
