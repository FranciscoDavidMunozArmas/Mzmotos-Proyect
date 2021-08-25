import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.css']
})
export class AgendaCardComponent implements OnInit {

  @ViewChild("agreeForm") agreeForm: ElementRef;
  @ViewChild("notifyForm") notifyForm: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  showAgreeForm() {
    this.triggerModal(this.agreeForm);
  }

  showNotifyForm() {
    this.triggerModal(this.notifyForm);
  }

  triggerModal(content: any) {
    this.modalService.open(content).result;
  }

  notify(application: string) {
    this.modalClose();
  }

  deleteCard() {
    this.modalClose();
  }

  modalClose() {
    this.modalService.dismissAll();
  }

}
