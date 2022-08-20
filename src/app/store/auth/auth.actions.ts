import { createAction, props, union } from '@ngrx/store';
import { RegisterInterface } from 'src/app/@auth/interfaces /register.interface';

export enum AuthActionsTypes {
  Register = '[Register Component] Register',
  RegisterSuccess = '[Auth Api] Register Success',
  RegisterError = '[Auth Api] Register Error',
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

const actionsUnion = union({
  /*
   * Register
   */
  Register,
  RegisterSuccess,
  RegisterError,
});

export type AuthActions = typeof actionsUnion;
