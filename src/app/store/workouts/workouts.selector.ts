import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import { Pending } from 'src/app/store/pending';
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

export const selectedWorkout = createSelector(
  selectWorkoutsState,
  (state: WorkoutsStateInterface): WorkoutInterface | null => state.selectedWorkout,
);

export const selectWorkoutPending = createSelector(
  selectWorkoutsState,
  (state: WorkoutsStateInterface): boolean => state.pending.workouts === Pending.Active,
);
