import { createReducer, on } from '@ngrx/store';
import { Pending } from 'src/app/store/pending';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'authState';

export interface AuthStateInterface {
  pending: Pending;
  errorMessage: string;
}

export const initialState: AuthStateInterface = {
  pending: Pending.None,
  errorMessage: '',
};

export const authReducer = createReducer(
  initialState,
  /*
   * Reset Password
   */
  on(AuthActions.ResetPassword, (state) => ({
    ...state,
    pending: Pending.Active,
  })),
  on(AuthActions.ResetPasswordSuccess, (state) => ({
    ...state,
    pending: Pending.Success,
  })),
  on(AuthActions.ResetPasswordError, (state) => ({
    ...state,
    pending: Pending.Error,
  })),

  /*
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
  on(AuthActions.RegisterError, (state, action: { errorMessage: string }) => ({
    ...state,
    pending: Pending.Error,
    errorMessage: action.errorMessage,
  })),

  /*
   * Login
   */
  on(AuthActions.Login, (state) => ({
    ...state,
    pending: Pending.Active,
  })),
  on(AuthActions.LoginSuccess, (state) => ({
    ...state,
    pending: Pending.None,
  })),
  on(AuthActions.LoginError, (state, action: { errorMessage: string }) => ({
    ...state,
    pending: Pending.Error,
    errorMessage: action.errorMessage,
  })),

  /*
   * ResetAuthState
   */
  on(AuthActions.ResetAuthState, () => ({
    ...initialState,
  })),
);
