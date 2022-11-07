import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExerciseInterface } from 'src/app/@core/interfaces/exercise.interface';
import {
  exerciseFeatureKey,
  ExercisesStateInterface,
} from 'src/app/store/exercise/exercise.reducer';

export const selectExerciseState =
  createFeatureSelector<ExercisesStateInterface>(exerciseFeatureKey);

export const selectExercises = createSelector(
  selectExerciseState,
  (state: ExercisesStateInterface): ExerciseInterface[] => state.exercises,
);
