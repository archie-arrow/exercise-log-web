import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthInterface } from 'src/app/@auth/interfaces /auth.interface';
import { RegisterInterface } from 'src/app/@auth/interfaces /register.interface';
import { environment } from 'src/environments/environment';

const authUrl = (part: string) => `${environment.baseURL}/auth/${part}`;

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  register(obj: RegisterInterface): Observable<AuthInterface> {
    return this.http.post<AuthInterface>(authUrl('register'), obj);
  }
}
