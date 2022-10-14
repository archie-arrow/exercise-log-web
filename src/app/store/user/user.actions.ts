import { createAction, props, union } from '@ngrx/store';

export enum UserActionsTypes {
  GetCurrentUser = '[Header Component] Get Current User',
  GetCurrentUserSuccess = '[User Api] Get Current User Success',
  GetCurrentUserError = '[User Api] Get Current User Error',
}

/*
 * Get Current User
 */
export const GetCurrentUser = createAction(UserActionsTypes.GetCurrentUser);

export const GetCurrentUserSuccess = createAction(
  UserActionsTypes.GetCurrentUserSuccess,
  props<{ name: string; email: string; id: string }>(),
);

export const GetCurrentUserError = createAction(UserActionsTypes.GetCurrentUserError);

const actionsUnion = union({
  /*
   * Get Current User
   */
  GetCurrentUser,
  GetCurrentUserSuccess,
  GetCurrentUserError,
});

export type UserActions = typeof actionsUnion;
