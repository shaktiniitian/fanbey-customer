import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // BASE_URL = 'https://link.dopluserp.com/api/v1/';
  BASE_URL = 'http://127.0.0.1:8000/api/v1/realstate/';

  constructor(private http: HttpClient) {}

  post(service:any, request: any) {
    return this.http.post(this.BASE_URL + service, request);
  }

  get(service: any) {
    return this.http.get(this.BASE_URL+service);
  }
}
