import { createReducer, on } from '@ngrx/store';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import { Pending } from 'src/app/store/pending';
import * as WorkoutsActions from './workouts.actions';

export const workoutsFeatureKey = 'workoutsState';

export interface WorkoutsStateInterface {
  workouts: WorkoutInterface[];
  pending: {
    workouts: Pending;
  };
}

export const initialState: WorkoutsStateInterface = {
  workouts: [],
  pending: {
    workouts: Pending.None,
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
      workouts: Pending.Active,
    },
  })),
  on(WorkoutsActions.GetWorkoutsSuccess, (state, action) => ({
    ...state,
    workouts: action.workouts,
    pending: {
      ...state.pending,
      workouts: Pending.None,
    },
  })),
  on(WorkoutsActions.GetWorkoutsError, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      workouts: Pending.Error,
    },
  })),

  /*
   * Create Workout
   */
  on(WorkoutsActions.CreateWorkout, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      workouts: Pending.Active,
    },
  })),
  on(WorkoutsActions.CreateWorkoutSuccess, (state, action) => ({
    ...state,
    workouts: [action.workout, ...state.workouts],
    pending: {
      ...state.pending,
      workouts: Pending.None,
    },
  })),
  on(WorkoutsActions.CreateWorkoutError, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      workouts: Pending.Error,
    },
  })),
);
