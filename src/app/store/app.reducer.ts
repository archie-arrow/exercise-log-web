import { combineReducers } from '@ngrx/store';
import { authFeatureKey, authReducer } from 'src/app/store/auth/auth.reducer';
import { settingsFeatureKey, settingsReducer } from 'src/app/store/settings/settings.reducer';
import { userFeatureKey, userReducer } from 'src/app/store/user/user.reducer';

export const ROOT_REDUCERS = {
  [authFeatureKey]: authReducer,
  [settingsFeatureKey]: settingsReducer,
  [userFeatureKey]: userReducer,
};
export const reducer = combineReducers(ROOT_REDUCERS);
export type AppState = ReturnType<typeof reducer>;
