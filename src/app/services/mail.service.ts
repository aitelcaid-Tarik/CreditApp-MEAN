import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as AppUtil from '../common/app.util';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(body: any) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    const headers = new HttpHeaders().set('Authorization', `Bearer  ${token}`);

    return this.http.post<any>('mail/send', body, { headers });
  }

}
