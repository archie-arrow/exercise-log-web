import { createAction, props, union } from '@ngrx/store';
import { ExerciseInterface } from 'src/app/@core/interfaces/exercise.interface';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';

export enum WorkoutsActionsTypes {
  GetWorkouts = '[Workouts component] Get Workouts',
  GetWorkoutsSuccess = '[Workouts Api] Get Workouts Success',
  GetWorkoutsError = '[Workouts Api] Get Workouts Error',

  CreateWorkout = '[Workout List component] Create Workout',
  CreateWorkoutSuccess = '[Workouts Api] Created Workout Success',
  CreateWorkoutError = '[Workouts Api] Created Workout Error',

  DeleteWorkout = '[Workout Card component] Delete Workout',
  DeleteWorkoutSuccess = '[Workouts Api] Delete Workout Success',
  DeleteWorkoutError = '[Workouts Api] Delete Workout Error',
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

/*
 * Create Workouts
 */
export const CreateWorkout = createAction(
  WorkoutsActionsTypes.CreateWorkout,
  props<{ name: string; exercises: string[] }>(),
);

export const CreateWorkoutSuccess = createAction(
  WorkoutsActionsTypes.CreateWorkoutSuccess,
  props<{ workout: WorkoutInterface }>(),
);

export const CreateWorkoutError = createAction(WorkoutsActionsTypes.CreateWorkoutError);

/*
 * Delete Workouts
 */
export const DeleteWorkout = createAction(
  WorkoutsActionsTypes.DeleteWorkout,
  props<{ id: string }>(),
);

export const DeleteWorkoutSuccess = createAction(
  WorkoutsActionsTypes.DeleteWorkoutSuccess,
  props<{ id: string }>(),
);

export const DeleteWorkoutError = createAction(WorkoutsActionsTypes.DeleteWorkoutError);

const actionsUnion = union({
  /*
   * Get Workouts
   */
  GetWorkouts,
  GetWorkoutsSuccess,
  GetWorkoutsError,

  /*
   * Create Workout
   */
  CreateWorkout,
  CreateWorkoutSuccess,
  CreateWorkoutError,

  /*
   * Delete Workouts
   */
  DeleteWorkout,
  DeleteWorkoutSuccess,
  DeleteWorkoutError,
});

export type WorkoutsActions = typeof actionsUnion;
