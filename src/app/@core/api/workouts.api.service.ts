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

  url = (id: string = '') => `${environment.baseURL}/workouts/${id}`;

  getWorkouts(): Observable<WorkoutInterface[]> {
    return this.http.get<WorkoutInterface[]>(this.url());
  }

  createWorkout(workout: { name: string; exercises: string[] }): Observable<WorkoutInterface> {
    return this.http.post<WorkoutInterface>(this.url(), workout);
  }

  deleteWorkout(id: string): Observable<null> {
    return this.http.delete<null>(this.url(id));
  }
}
