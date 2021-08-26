import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  input = {
    username: "",
    password: ""
  }

  private cookieName: string = "logged-user";
  private cookieRole: string = "role";

  constructor(private userService: UserService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    const cookieName = this.cookie.get(this.cookieName);
    const cookieRole = this.cookie.get(this.cookieRole);
    if(cookieName && cookieRole) {
      this.letUserIn({ token: cookieName, role: cookieRole});
    }
  }

  onChange(value: any) {
    this.input = { ... this.input, [value.name]: value.value };
  }

  submitUser(loginForm: NgForm) {
    this.userService.allowAccess(loginForm.value.username, loginForm.value.password)
    .subscribe(res => {
      this.letUserIn(res);
    })
  }

  letUserIn(value: any) {
    if(!value.token || !value.role) {
      return;
    }
    let date = new Date();
    date.setHours(date.getHours() + 2);
    this.cookie.set(this.cookieName, value.token, date);
    this.cookie.set(this.cookieRole, value.role, date);
    if(value.role == "manager") {
      this.router.navigate(["/manager"]);
    } else if(value.role == "warehouse") {
      this.router.navigate(["/warehouse"]);
    } else if(value.role == "salesman") {
      this.router.navigate(["/sales"]);
    }
  }

}
