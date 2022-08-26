import { createAction, props, union } from '@ngrx/store';
import { LoginInterface } from 'src/app/@auth/interfaces/login.interface';

export enum AuthActionsTypes {
  Register = '[Register Component] Register',
  RegisterSuccess = '[Auth Api] Register Success',
  RegisterError = '[Auth Api] Register Error',

  Login = '[Login Component] Login',
  LoginSuccess = '[Auth Api] Login Success',
  LoginError = '[Auth Api] Login Error',

  ResetAuthState = '[Auth] Reset Auth State',
}

/*
 * Register
 */
export const Register = createAction(
  AuthActionsTypes.Register,
  props<{ register: RegisterInterface }>(),
);

export const RegisterSuccess = createAction(AuthActionsTypes.RegisterSuccess);

export const RegisterError = createAction(
  AuthActionsTypes.RegisterError,
  props<{ errorMessage: string }>(),
);

/*
 * Login
 */
export const Login = createAction(AuthActionsTypes.Login, props<{ login: LoginInterface }>());

export const LoginSuccess = createAction(AuthActionsTypes.LoginSuccess);

export const LoginError = createAction(
  AuthActionsTypes.LoginError,
  props<{ errorMessage: string }>(),
);

/*
 * ResetAuthState
 */
export const ResetAuthState = createAction(AuthActionsTypes.ResetAuthState);

const actionsUnion = union({
  /*
   * Register
   */
  Register,
  RegisterSuccess,
  RegisterError,

  /*
   * Login
   */
  Login,
  LoginSuccess,
  LoginError,

  /*
   * ResetAuthState
   */
  ResetAuthState,
});

export type AuthActions = typeof actionsUnion;
