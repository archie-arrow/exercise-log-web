import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import {
  workoutsFeatureKey,
  WorkoutsStateInterface,
} from 'src/app/store/workouts/workouts.reducer';

export const selectWorkoutsState =
  createFeatureSelector<WorkoutsStateInterface>(workoutsFeatureKey);

export const selectWorkouts = createSelector(
  selectWorkoutsState,
  (state: WorkoutsStateInterface): WorkoutInterface[] => state.workouts,
);
