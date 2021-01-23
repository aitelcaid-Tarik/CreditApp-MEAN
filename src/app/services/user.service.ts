import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AppUtil from '../common/app.util';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createAccount(user: any) {
    return this.http.post<any>('users/register', user);
  }

  autho(user: any) {
    return this.http.post<any>('users/autho', user);
  }

  saveUseData(token: any, user: any) {
    localStorage.setItem(AppUtil.AUTH_TOKEN, token);
    localStorage.setItem(AppUtil.USER_INFO, JSON.stringify(user));
  }

  isLoggedIn() : boolean{
    return !!localStorage.getItem(AppUtil.AUTH_TOKEN);
  }
}
