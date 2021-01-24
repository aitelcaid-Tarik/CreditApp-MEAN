import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as AppUtil from '../common/app.util';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  constructor(private http: HttpClient) { }


  calAnnuite(body: any) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    const headers = new HttpHeaders().set('Authorization', `Bearer  ${token}`);

    return this.http.post('credits/calculAnnuite', body, { headers });
  }

  saveCredit(credit: any) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    const headers = new HttpHeaders().set('Authorization', `Bearer  ${token}`);

    return this.http.post('credits/add', credit, { headers });
  }

  getCredits(query: any) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    const headers = new HttpHeaders().set('Authorization', `Bearer  ${token}`);

    return this.http.post('credits/list', query, { headers });
  }



}
