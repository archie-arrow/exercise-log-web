import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/@shared/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  url = (path: string) => `${environment.baseURL}/users/${path}`;

  getCurrentUser(): Observable<UserInterface> {
    return this.http.get<UserInterface>(this.url('current'));
  }
}
