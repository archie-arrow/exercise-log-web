import { createReducer, on } from '@ngrx/store';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import { Pending } from 'src/app/store/pending';
import * as WorkoutsActions from './workouts.actions';

export const workoutsFeatureKey = 'workoutsState';

export interface WorkoutsStateInterface {
  workouts: WorkoutInterface[];
  selectedWorkout: WorkoutInterface | null;
  pending: {
    workouts: Pending;
    deleteWorkout: Pending;
  };
}

export const initialState: WorkoutsStateInterface = {
  workouts: [],
  selectedWorkout: null,
  pending: {
    workouts: Pending.None,
    deleteWorkout: Pending.None,
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
   * Get Workout
   */
  on(WorkoutsActions.GetWorkout, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      workouts: Pending.Active,
    },
  })),
  on(WorkoutsActions.GetWorkoutSuccess, (state, action) => ({
    ...state,
    selectedWorkout: action.workout,
    pending: {
      ...state.pending,
      workouts: Pending.None,
    },
  })),
  on(WorkoutsActions.GetWorkoutError, (state) => ({
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

  /*
   * Delete Workout
   */
  on(WorkoutsActions.DeleteWorkout, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      deleteWorkout: Pending.Active,
    },
  })),
  on(WorkoutsActions.DeleteWorkoutSuccess, (state, action) => ({
    ...state,
    workouts: [...state.workouts.filter((item) => item.id !== action.id)],
    pending: {
      ...state.pending,
      deleteWorkout: Pending.None,
    },
  })),
  on(WorkoutsActions.DeleteWorkoutError, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      deleteWorkout: Pending.Error,
    },
  })),
);
