import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onChange(value: any) {
    this.input = { ... this.input, [value.name]: value.value };
  }

  submitUser(loginForm: NgForm) {
    this.userService.sigin(loginForm.value.username, loginForm.value.password)
      .subscribe((res: any) => {
        this.authService.signin(res, true);
      })
  }

}
