import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsApiService {
  constructor(private http: HttpClient) {}

  url = () => `${environment.baseURL}/workouts`;

  getWorkouts(): Observable<WorkoutInterface[]> {
    return this.http.get<WorkoutInterface[]>(this.url());
  }
}
