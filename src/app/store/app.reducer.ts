import { combineReducers } from '@ngrx/store';
import { authFeatureKey, authReducer } from 'src/app/store/auth/auth.reducer';
import { exerciseReducer, exerciseFeatureKey } from 'src/app/store/exercise/exercise.reducer';
import { settingsFeatureKey, settingsReducer } from 'src/app/store/settings/settings.reducer';
import { userFeatureKey, userReducer } from 'src/app/store/user/user.reducer';
import { workoutsFeatureKey, workoutsReducer } from 'src/app/store/workouts/workouts.reducer';

export const ROOT_REDUCERS = {
  [authFeatureKey]: authReducer,
  [settingsFeatureKey]: settingsReducer,
  [userFeatureKey]: userReducer,
  [workoutsFeatureKey]: workoutsReducer,
  [exerciseFeatureKey]: exerciseReducer,
};
export const reducer = combineReducers(ROOT_REDUCERS);
export type AppState = ReturnType<typeof reducer>;
