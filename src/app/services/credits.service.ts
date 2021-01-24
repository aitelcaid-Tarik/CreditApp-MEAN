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

    return this.http.post<any>('credits/calculAnnuite', body, { headers });
  }

  calCapital(body: any) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    const headers = new HttpHeaders().set('Authorization', `Bearer  ${token}`);

    return this.http.post<any>('credits/calculCapital', body, { headers });
  }

  calDuree(body: any) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    const headers = new HttpHeaders().set('Authorization', `Bearer  ${token}`);

    return this.http.post<any>('credits/calculDuree', body, { headers });
  }

  saveCredit(credit: any) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    const headers = new HttpHeaders().set('Authorization', `Bearer  ${token}`);

    return this.http.post<any>('credits/add', credit, { headers });
  }

  getCredits(query: any) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    const headers = new HttpHeaders().set('Authorization', `Bearer  ${token}`);

    return this.http.post<any>('credits/list', query, { headers });
  }

}
