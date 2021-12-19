import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { products } from '../../data/product.data';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit(): void {
    this.products = products;
  }

}
