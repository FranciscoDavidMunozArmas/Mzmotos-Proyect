import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/lib/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  allowAccess(username: string, password: string) {
    return this.http.post(`${CONSTANTS.URI_PATH}/signin`, {username, password});
  }
}
