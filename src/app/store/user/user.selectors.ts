import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Pending } from 'src/app/store/pending';
import { userFeatureKey, UserStateInterface } from 'src/app/store/user/user.reducer';

export const selectUserState = createFeatureSelector<UserStateInterface>(userFeatureKey);

export const selectUserName = createSelector(
  selectUserState,
  (state: UserStateInterface): string => state.name,
);

export const selectUserLoading = createSelector(
  selectUserState,
  (state: UserStateInterface): boolean => state.pending === Pending.Active,
);

export const selectUserEmail = createSelector(
  selectUserState,
  (state: UserStateInterface): string => state.email,
);
