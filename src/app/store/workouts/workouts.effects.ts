import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { WorkoutsApiService } from 'src/app/@core/api/workouts.api.service';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import {
  CreateWorkoutError,
  CreateWorkoutSuccess,
  DeleteWorkoutError,
  DeleteWorkoutSuccess,
  GetWorkoutError,
  GetWorkoutsError,
  GetWorkoutsSuccess,
  GetWorkoutSuccess,
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
   * Get Workout
   */
  getWorkout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WorkoutsActionsTypes.GetWorkout),
      switchMap((action: { id: string }) =>
        this.workoutsApiService.getWorkout(action.id).pipe(
          map((workout: WorkoutInterface) => GetWorkoutSuccess({ workout })),
          catchError(() => of(GetWorkoutError())),
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
      switchMap((action: { name: string; exercises: string[] }) =>
        this.workoutsApiService.createWorkout(action).pipe(
          map((workout: WorkoutInterface) => CreateWorkoutSuccess({ workout })),
          catchError(() => of(CreateWorkoutError())),
        ),
      ),
    );
  });

  /*
   * Delete Workout
   */
  deleteWorkout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WorkoutsActionsTypes.DeleteWorkout),
      switchMap((action: { id: string }) =>
        this.workoutsApiService.deleteWorkout(action.id).pipe(
          map(() => DeleteWorkoutSuccess(action)),
          catchError(() => of(DeleteWorkoutError())),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions<WorkoutsActions>,
    private workoutsApiService: WorkoutsApiService,
  ) {}
}
