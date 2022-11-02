import { createAction, props, union } from '@ngrx/store';
import { ExerciseInterface } from 'src/app/@core/interfaces/exercise.interface';

export enum ExercisesActionsTypes {
  GetExercises = '[] Get Exercises',
  GetExercisesSuccess = '[Exercise Api] Get Exercises Success',
  GetExercisesError = '[Exercise Api] Get Exercises Error',

  CreateExercise = '[] Create Exercise',
  CreateExerciseSuccess = '[Exercise Api] Created Exercise Success',
  CreateExerciseError = '[Exercise Api] Created Exercise Error',
}

/*
 * Get Exercises
 */
export const GetExercises = createAction(ExercisesActionsTypes.GetExercises);

export const GetExercisesSuccess = createAction(
  ExercisesActionsTypes.GetExercisesSuccess,
  props<{ exercises: ExerciseInterface[] }>(),
);

export const GetExercisesError = createAction(ExercisesActionsTypes.GetExercisesError);

/*
 * create Exercise
 */
export const CreateExercise = createAction(
  ExercisesActionsTypes.CreateExercise,
  props<{ exercise: ExerciseInterface }>(),
);

export const CreateExerciseSuccess = createAction(
  ExercisesActionsTypes.CreateExerciseSuccess,
  props<{ exercise: ExerciseInterface }>(),
);

export const CreateExerciseError = createAction(ExercisesActionsTypes.CreateExerciseError);

const actionsUnion = union({
  /*
   * Get Exercises
   */
  GetExercises,
  GetExercisesSuccess,
  GetExercisesError,

  /*
   * create Exercise
   */
  CreateExercise,
  CreateExerciseSuccess,
  CreateExerciseError,
});

export type ExercisesActions = typeof actionsUnion;
