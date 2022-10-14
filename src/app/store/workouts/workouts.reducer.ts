import { createReducer, on } from '@ngrx/store';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import { Pending } from 'src/app/store/pending';
import * as WorkoutsActions from './workouts.actions';

export const workoutsFeatureKey = 'workoutsState';

export interface WorkoutsStateInterface {
  workouts: WorkoutInterface[];
  pending: {
    getWorkouts: Pending;
  };
}

export const initialState: WorkoutsStateInterface = {
  workouts: [],
  pending: {
    getWorkouts: Pending.None,
  },
};

export const workoutsReducer = createReducer(
  initialState,
  /*
   * Get Workouts
   */
  on(WorkoutsActions.GetWorkouts, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      getWorkouts: Pending.Active,
    },
  })),
  on(WorkoutsActions.GetWorkoutsSuccess, (state, action) => ({
    ...state,
    workouts: action.workouts,
    pending: {
      ...state.pending,
      getWorkouts: Pending.None,
    },
  })),
  on(WorkoutsActions.GetWorkoutsError, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      getWorkouts: Pending.Error,
    },
  })),
);
