import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/Product';
import { CONSTANTS } from 'src/lib/constants';

@Component({
  selector: 'app-catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.css']
})
export class CatalogueItemComponent implements OnInit {
  
  @Input() product: Product;
  @Input() enableSelection: boolean;
  @ViewChild("item") item: ElementRef;

  imagePath: string = "";
  showDetails: boolean = false;
  selectedProduct: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.imagePath = `${CONSTANTS.API_URL}/${this.product.image}`;
    this.enableSelection = (this.enableSelection) ? this.enableSelection : false;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  toggleSelected() {
    this.selectedProduct = !this.selectedProduct;
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
