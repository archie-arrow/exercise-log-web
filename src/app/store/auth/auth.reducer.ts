import { createReducer, on } from '@ngrx/store';
import { Pending } from 'src/app/store/pending';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'authState';

export interface AuthStateInterface {
  pending: {
    register: Pending;
    login: Pending;
  };
  errorMessage: string;
}

export const initialState: AuthStateInterface = {
  pending: {
    register: Pending.None,
    login: Pending.None,
  },
  errorMessage: '',
};

export const authReducer = createReducer(
  initialState,
  /**
   * Register
   */
  on(AuthActions.Register, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      register: Pending.Active,
    },
  })),
  on(AuthActions.RegisterSuccess, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      register: Pending.None,
    },
  })),
  on(AuthActions.RegisterError, (state, action: { errorMessage: string }) => ({
    ...state,
    pending: {
      ...state.pending,
      register: Pending.Error,
    },
    errorMessage: action.errorMessage,
  })),

  /**
   * Login
   */
  on(AuthActions.Login, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      login: Pending.Active,
    },
  })),
  on(AuthActions.LoginSuccess, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      login: Pending.None,
    },
  })),
  on(AuthActions.LoginError, (state, action: { errorMessage: string }) => ({
    ...state,
    pending: {
      ...state.pending,
      login: Pending.Error,
    },
    errorMessage: action.errorMessage,
  })),
);
