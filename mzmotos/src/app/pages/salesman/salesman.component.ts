import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/lib/auth.service';
import { decode } from 'src/lib/token';

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.css']
})
export class SalesmanComponent implements OnInit {

  paths: string[] = []

  constructor(private auth: AuthService, private router: Router) {
    this.paths.push("Agenda");
    this.paths.push("Catalogo");
  }

  ngOnInit(): void {
    const token = decode(this.auth.getToken());
    if (!token) {
      this.router.navigate(["/login"]);
    } else {
      if (token.role != "salesman") {
        this.router.navigate(["/login"]);
      }
    }
  }

}
