import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client, clientConverter } from 'src/app/models/Client';
import { Order } from 'src/app/models/Order';
import { Product, productConverter } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/lib/auth.service';
import { decode } from 'src/lib/token';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  @ViewChild("setSelection") setSelection: ElementRef;
  @ViewChild("agreement") agreementModal: ElementRef;

  products: Product[];
  selectedClient: Client;
  order: any = {
    salesman: "",
    client: null,
    list: [],
    total: 0
  };
  private token: any;

  constructor(
    private service: ProductService,
    private auth: AuthService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.token = decode(this.auth.getToken());
    this.products = [];
    this.getProducts();
    this.order.salesman = this.token.user;
  }

  getProducts() {
    this.service.getProducts()
      .subscribe(res => {
        this.products = res;
      });
  }

  handleClientSelection(client: Client) {
    this.selectedClient = client;
    this.order.client = clientConverter.toJSON(client);
    this.modalClose();
  }

  handleAddProductOrder(productOrder: any) {
    if (this.order.list.length === 0) {
      this.order.list.push(productOrder);
    } else {
      const product = this.order.list.find((item:any )=> item.product._id === productOrder.product._id);
      if (product) {
        this.order.list = this.order.list.map(item => {
          if (item.product._id === productOrder.product._id) {
            item = {
              product: productConverter.toJSON(productOrder.product),
              quantity: productOrder.quantity
            }
          }
          return item;
        });
      } else {
        this.order.list.push({
          product: productConverter.toJSON(productOrder.product),
          quantity: productOrder.quantity
        });
      }
    }
    this.handleTotal();
  }

  handleRemoveProductOrder(productOrder: any) {
    this.order.list = this.order.list.filter(item => item.product._id !== productOrder._id);
    this.handleTotal();
  }

  handleTotal() {
    this.order.total = 0;
    this.order.list.forEach(item => {
      this.order.total += item.product.price * item.quantity;
    });
  }

  unselectClient() {
    this.selectedClient = null;
  }

  handleAgreement() {
    this.unselectClient();
  }

  showSelectionModal() {
    this.triggerModal(this.setSelection);
  }

  showAgreementModal() {
    this.triggerModal(this.agreementModal);
  }

  triggerModal(modal: any) {
    this.modalService.open(modal).result;
  }

  modalClose() {
    this.modalService.dismissAll();
  }

}
