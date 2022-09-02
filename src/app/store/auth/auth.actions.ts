import { createAction, props, union } from '@ngrx/store';
import { LoginInterface } from 'src/app/@auth/interfaces/login.interface';
import { RegisterInterface } from 'src/app/@auth/interfaces/register.interface';

export enum AuthActionsTypes {
  ForgotPassword = '[Forgot Password Component] Forgot Password',
  ForgotPasswordSuccess = '[Auth Api] Forgot Password Success',
  ForgotPasswordError = '[Auth Api] Forgot Password Error',

  Register = '[Register Component] Register',
  RegisterSuccess = '[Auth Api] Register Success',
  RegisterError = '[Auth Api] Register Error',

  Login = '[Login Component] Login',
  LoginSuccess = '[Auth Api] Login Success',
  LoginError = '[Auth Api] Login Error',

  ResetAuthState = '[Auth] Reset Auth State',
}

/*
 * Forgot Password
 */
export const ForgotPassword = createAction(
  AuthActionsTypes.ForgotPassword,
  props<{ email: string }>(),
);

export const ForgotPasswordSuccess = createAction(AuthActionsTypes.ForgotPasswordSuccess);

export const ForgotPasswordError = createAction(AuthActionsTypes.ForgotPasswordError);

/*
 * Register
 */
export const Register = createAction(
  AuthActionsTypes.Register,
  props<{ register: RegisterInterface }>(),
);

export const RegisterSuccess = createAction(
  AuthActionsTypes.RegisterSuccess,
  props<{ token: string }>(),
);

export const RegisterError = createAction(
  AuthActionsTypes.RegisterError,
  props<{ errorMessage: string }>(),
);

/*
 * Login
 */
export const Login = createAction(AuthActionsTypes.Login, props<{ login: LoginInterface }>());

export const LoginSuccess = createAction(AuthActionsTypes.LoginSuccess, props<{ token: string }>());

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
   * Forgot Password
   */
  ForgotPassword,
  ForgotPasswordSuccess,
  ForgotPasswordError,

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
