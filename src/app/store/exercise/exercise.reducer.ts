import { createReducer, on } from '@ngrx/store';
import { ExerciseInterface } from 'src/app/@core/interfaces/exercise.interface';
import { Pending } from 'src/app/store/pending';
import * as ExercisesActions from './exercise.actions';

export const exerciseFeatureKey = 'exerciseState';

export interface ExercisesStateInterface {
  exercises: ExerciseInterface[];
  pending: {
    exercises: Pending;
    create: Pending;
  };
}

export const initialState: ExercisesStateInterface = {
  exercises: [],
  pending: {
    exercises: Pending.None,
    create: Pending.None,
  },
};

export const exerciseReducer = createReducer(
  initialState,
  /*
   * Get Exercises
   */
  on(ExercisesActions.GetExercises, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      exercises: Pending.Active,
    },
  })),
  on(ExercisesActions.GetExercisesSuccess, (state, action) => ({
    ...state,
    exercises: action.exercises,
    pending: {
      ...state.pending,
      exercises: Pending.None,
    },
  })),
  on(ExercisesActions.GetExercisesError, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      exercises: Pending.Error,
    },
  })),

  /*
   * Create Exercise
   */
  on(ExercisesActions.CreateExercise, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      create: Pending.Active,
    },
  })),
  on(ExercisesActions.CreateExerciseSuccess, (state, action) => ({
    ...state,
    exercises: [action.exercise, ...state.exercises],
    pending: {
      ...state.pending,
      create: Pending.None,
    },
  })),
  on(ExercisesActions.CreateExerciseError, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      create: Pending.Error,
    },
  })),
);
