import { createAction, props, union } from '@ngrx/store';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
export enum WorkoutsActionsTypes {
  GetWorkouts = '[Workouts component] Get Workouts',
  GetWorkoutsSuccess = '[Workouts Api] Get Workouts Success',
  GetWorkoutsError = '[Workouts Api] Get Workouts Error',
}

/*
 * Get Workouts
 */
export const GetWorkouts = createAction(WorkoutsActionsTypes.GetWorkouts);

export const GetWorkoutsSuccess = createAction(
  WorkoutsActionsTypes.GetWorkoutsSuccess,
  props<{ workouts: WorkoutInterface[] }>(),
);

export const GetWorkoutsError = createAction(WorkoutsActionsTypes.GetWorkoutsError);

const actionsUnion = union({
  /*
   * Get Workouts
   */
  GetWorkouts,
  GetWorkoutsSuccess,
  GetWorkoutsError,
});

export type WorkoutsActions = typeof actionsUnion;
