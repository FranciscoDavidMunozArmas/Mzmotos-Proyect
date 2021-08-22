import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() paths: string[] = [];
  @Output() logout = new EventEmitter<any>();
  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.paths= this.paths.map((element: string) => element.toLowerCase());
  }

}
