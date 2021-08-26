import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Service {

  constructor(private http: HttpClient) {
    super();
    super.expandURI("/user");
  }

  allowAccess(username: string, password: string) {
    return this.http.post(`${super.getURI()}/access`, {username, password});
  }
}
