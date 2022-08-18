import { createReducer, on } from '@ngrx/store';
import { Pending } from 'src/app/store/pending';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'authState';

export interface AuthStateInterface {
  pending: Pending;
}

export const initialState: AuthStateInterface = {
  pending: Pending.None,
};

export const authReducer = createReducer(
  initialState,
  /**
   * Register
   */
  on(AuthActions.Register, (state) => ({
    ...state,
    pending: Pending.Active,
  })),
  on(AuthActions.RegisterSuccess, (state) => ({
    ...state,
    pending: Pending.None,
  })),
  on(AuthActions.RegisterError, (state) => ({
    ...state,
    pending: Pending.None,
  })),
);
