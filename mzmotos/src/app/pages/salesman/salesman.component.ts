import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.css']
})
export class SalesmanComponent implements OnInit {

  paths: string[] = []

  private cookieName: string = "logged-user";
  private cookieRole: string = "role";

  constructor(private cookie: CookieService, private router: Router) {
    this.paths.push("Agenda");
    this.paths.push("Catalogo");
  }

  ngOnInit(): void {
  }

}
