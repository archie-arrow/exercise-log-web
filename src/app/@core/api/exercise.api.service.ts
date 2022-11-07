import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciseInterface } from 'src/app/@core/interfaces/exercise.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExerciseApiService {
  constructor(private http: HttpClient) {}

  url = (id: string = '') => `${environment.baseURL}/exercises/${id}`;

  createExercise(obj: ExerciseInterface): Observable<ExerciseInterface> {
    return this.http.post<ExerciseInterface>(this.url(), obj);
  }

  getExercises(): Observable<ExerciseInterface[]> {
    return this.http.get<ExerciseInterface[]>(this.url());
  }
}
