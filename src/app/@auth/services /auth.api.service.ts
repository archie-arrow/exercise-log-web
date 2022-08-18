import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterInterface } from 'src/app/@auth/interfaces /register.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  register(obj: RegisterInterface) {
    return this.http.post(`${environment.baseURL}/auth/register`, obj);
  }
}
