import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthStateInterface } from 'src/app/store/auth/auth.reducer';
import { Pending } from 'src/app/store/pending';

export const selectAuthState = createFeatureSelector<AuthStateInterface>(authFeatureKey);

export const selectRegisterPending = createSelector(
  selectAuthState,
  (state: AuthStateInterface): boolean => state.pending.register === Pending.Active,
);

export const selectRegisterPendingError = createSelector(
  selectAuthState,
  (state: AuthStateInterface): boolean => state.pending.register === Pending.Error,
);

export const selectLoginPending = createSelector(
  selectAuthState,
  (state: AuthStateInterface): boolean => state.pending.login === Pending.Active,
);

export const selectLoginPendingError = createSelector(
  selectAuthState,
  (state: AuthStateInterface): boolean => state.pending.login === Pending.Error,
);

export const selectAuthErrorMessage = createSelector(
  selectAuthState,
  (state: AuthStateInterface): string => state.errorMessage,
);
