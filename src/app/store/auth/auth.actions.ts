import { createAction, props, union } from '@ngrx/store';
import { LoginInterface } from 'src/app/@auth/interfaces/login.interface';
import { RegisterInterface } from 'src/app/@auth/interfaces/register.interface';
import { ResetPasswordInterface } from 'src/app/@auth/interfaces/reset-password.interface';

export enum AuthActionsTypes {
  ForgotPassword = '[Forgot Password Component] Forgot Password',
  ForgotPasswordSuccess = '[Auth Api] Forgot Password Success',
  ForgotPasswordError = '[Auth Api] Forgot Password Error',

  ResetPassword = '[Reset Password Component] Reset Password',
  ResetPasswordSuccess = '[Auth Api] Reset Password Success',
  ResetPasswordError = '[Auth Api] Reset Password Error',

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
 * Reset Password
 */
export const ResetPassword = createAction(
  AuthActionsTypes.ResetPassword,
  props<{ data: ResetPasswordInterface }>(),
);

export const ResetPasswordSuccess = createAction(AuthActionsTypes.ResetPasswordSuccess);

export const ResetPasswordError = createAction(
  AuthActionsTypes.ResetPasswordError,
  props<{ errorMessage: string }>(),
);

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
   * Reset Password
   */
  ResetPassword,
  ResetPasswordSuccess,
  ResetPasswordError,

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
