import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { WorkoutsApiService } from 'src/app/@core/api/workouts.api.service';
import { ExerciseInterface } from 'src/app/@core/interfaces/exercise.interface';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import {
  CreateWorkoutError,
  CreateWorkoutSuccess,
  GetWorkoutsError,
  GetWorkoutsSuccess,
  WorkoutsActions,
  WorkoutsActionsTypes,
} from 'src/app/store/workouts/workouts.actions';

@Injectable({ providedIn: 'root' })
export class WorkoutsEffects {
  /*
   * Get Workouts
   */
  getWorkouts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WorkoutsActionsTypes.GetWorkouts),
      switchMap(() =>
        this.workoutsApiService.getWorkouts().pipe(
          map((workouts: WorkoutInterface[]) => GetWorkoutsSuccess({ workouts })),
          catchError(() => of(GetWorkoutsError())),
        ),
      ),
    );
  });

  /*
   * Create Workout
   */
  createWorkout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WorkoutsActionsTypes.CreateWorkout),
      switchMap((action: { name: string; exercises: ExerciseInterface[] }) =>
        this.workoutsApiService.createWorkout(action).pipe(
          map((workout: WorkoutInterface) => CreateWorkoutSuccess({ workout })),
          catchError(() => of(CreateWorkoutError())),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions<WorkoutsActions>,
    private workoutsApiService: WorkoutsApiService,
  ) {}
}
