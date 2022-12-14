import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthInterface } from 'src/app/@auth/interfaces/auth.interface';
import { LoginInterface } from 'src/app/@auth/interfaces/login.interface';
import { RegisterInterface } from 'src/app/@auth/interfaces/register.interface';
import { ResetPasswordInterface } from 'src/app/@auth/interfaces/reset-password.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  authUrl = (part: string) => `${environment.baseURL}/auth/${part}`;

  register(obj: RegisterInterface): Observable<AuthInterface> {
    return this.http.post<AuthInterface>(this.authUrl('register'), obj);
  }

  login(obj: LoginInterface): Observable<AuthInterface> {
    return this.http.post<AuthInterface>(this.authUrl('login'), obj);
  }

  forgotPassword(email: string): Observable<null> {
    return this.http.post<null>(this.authUrl('forgot-password'), { email });
  }

  resetPassword(data: ResetPasswordInterface): Observable<null> {
    return this.http.post<null>(this.authUrl('reset-password'), data);
  }
}
