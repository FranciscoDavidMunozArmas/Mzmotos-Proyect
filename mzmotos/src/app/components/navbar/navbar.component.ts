import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() paths: string[] = [];
  isCollapsed: boolean = true;

  private cookieName: string = "logged-user";
  private cookieRole: string = "role";

  constructor(private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.paths= this.paths.map((element: string) => element.toLowerCase());
  }

  logout() {
    this.cookie.deleteAll();
    this.router.navigate(["/login"]);
  }

}
