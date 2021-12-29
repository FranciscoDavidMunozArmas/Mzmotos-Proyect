import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Output() eventSelection = new EventEmitter<any>();

  imagePath: string = "";
  showDetails: boolean = false;
  selectedProduct: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.imagePath = `${CONSTANTS.API_URL}/${this.product.image}`;
    this.enableSelection = (this.enableSelection) ? true : false;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;

    if(this.enableSelection) {
      this.eventSelection.emit(this.product);
    }
  }

  onErrorImage(event: any) {
    event.target.src = "../assets/images/non_image.png";
  }

  toggleSelected() {
    this.selectedProduct = !this.selectedProduct;
  }

  formatNumber(): string {
    return this.product.price.toLocaleString(undefined, {minimumFractionDigits: 2});
  }

  triggerModal(content: any) {
    this.modalService.open(content).result;
  }

  modalClose() {
    this.modalService.dismissAll();
  }

}
