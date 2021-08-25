import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchEvent= new EventEmitter<string>();
  @Output() cancelEvent= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.searchEvent.emit();
  }

  cancel() {
    this.cancelEvent.emit();
  }

}
