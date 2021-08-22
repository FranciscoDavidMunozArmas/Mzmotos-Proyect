import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.css']
})
export class SalesmanComponent implements OnInit {

  paths: string[] = []

  constructor() {
    this.paths.push("Agenda");
    this.paths.push("Catalogo");
  }

  ngOnInit(): void {
  }

}
