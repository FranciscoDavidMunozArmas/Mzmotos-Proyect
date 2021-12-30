import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.css']
})
export class OrderContainerComponent implements OnInit {

  @Input() salesmanId: string;

  showProducts: boolean = false;

  constructor(
    private service: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.service.getOrdersBySalesman(this.salesmanId)
    .subscribe(res => {
      console.log(res);
    });
  }

  toggleShowProducts() {
    this.showProducts = !this.showProducts;
  }

}
