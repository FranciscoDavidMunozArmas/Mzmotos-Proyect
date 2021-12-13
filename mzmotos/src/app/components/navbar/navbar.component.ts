import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() paths: string[] = [];
  isCollapsed: boolean = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.paths= this.paths.map((element: string) => element.toLowerCase());
  }

  logout() {
    this.authService.signout();
    this.router.navigate(["/login"]);
  }

}
