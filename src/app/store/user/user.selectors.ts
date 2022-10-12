import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserStateInterface, userFeatureKey } from 'src/app/store/user/user.reducer';

export const selectUserState = createFeatureSelector<UserStateInterface>(userFeatureKey);

export const selectUserName = createSelector(
  selectUserState,
  (state: UserStateInterface): string => state.name,
);

export const selectUserEmail = createSelector(
  selectUserState,
  (state: UserStateInterface): string => state.email,
);
