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
  props<{ name: string; exercises: ExerciseInterface[] }>(),
);

export const CreateWorkoutSuccess = createAction(
  WorkoutsActionsTypes.CreateWorkoutSuccess,
  props<{ workout: WorkoutInterface }>(),
);

export const CreateWorkoutError = createAction(WorkoutsActionsTypes.CreateWorkoutError);

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
});

export type WorkoutsActions = typeof actionsUnion;
