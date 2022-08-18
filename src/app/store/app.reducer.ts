import { combineReducers } from '@ngrx/store';
import { authFeatureKey, authReducer } from 'src/app/store/auth/auth.reducer';

export const ROOT_REDUCERS = {
  [authFeatureKey]: authReducer,
};
export const reducer = combineReducers(ROOT_REDUCERS);
export type AppState = ReturnType<typeof reducer>;
