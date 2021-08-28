import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.css']
})
export class CatalogueItemComponent implements OnInit {
  
  @Input() product: Product;
  @ViewChild("item") item: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  formatNumber(): string {
    return this.product.price.toLocaleString(undefined, {minimumFractionDigits: 2});
  }

  showItem(){
    this.triggerModal(this.item)
  }

  triggerModal(content: any) {
    this.modalService.open(content).result;
  }

  modalClose() {
    this.modalService.dismissAll();
  }

}
