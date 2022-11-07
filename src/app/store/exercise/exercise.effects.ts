import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ExerciseApiService } from 'src/app/@core/api/exercise.api.service';
import { ExerciseInterface } from 'src/app/@core/interfaces/exercise.interface';
import {
  CreateExerciseError,
  CreateExerciseSuccess,
  ExercisesActions,
  ExercisesActionsTypes,
  GetExercisesError,
  GetExercisesSuccess,
} from 'src/app/store/exercise/exercise.actions';

@Injectable({ providedIn: 'root' })
export class ExerciseEffects {
  /*
   * Get Exercises
   */
  getExercises$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExercisesActionsTypes.GetExercises),
      switchMap(() =>
        this.exerciseApiService.getExercises().pipe(
          map((exercises: ExerciseInterface[]) => GetExercisesSuccess({ exercises })),
          catchError(() => of(GetExercisesError())),
        ),
      ),
    );
  });

  /*
   * Create Exercise
   */
  createExercise$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExercisesActionsTypes.CreateExercise),
      switchMap((action: { exercise: ExerciseInterface }) =>
        this.exerciseApiService.createExercise(action.exercise).pipe(
          map((exercise: ExerciseInterface) => CreateExerciseSuccess({ exercise })),
          catchError(() => of(CreateExerciseError())),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions<ExercisesActions>,
    private exerciseApiService: ExerciseApiService,
  ) {}
}
