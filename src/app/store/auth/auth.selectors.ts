import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthStateInterface } from 'src/app/store/auth/auth.reducer';
import { Pending } from 'src/app/store/pending';

export const selectAuthState = createFeatureSelector<AuthStateInterface>(authFeatureKey);

export const selectAuthPending = createSelector(
  selectAuthState,
  (state: AuthStateInterface): boolean => state.pending === Pending.Active,
);

export const selectAuthPendingError = createSelector(
  selectAuthState,
  (state: AuthStateInterface): boolean => state.pending === Pending.Error,
);

export const selectAuthErrorMessage = createSelector(
  selectAuthState,
  (state: AuthStateInterface): string => state.errorMessage,
);
