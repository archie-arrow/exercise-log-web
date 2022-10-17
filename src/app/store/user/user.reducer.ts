import { createReducer, on } from '@ngrx/store';
import { Pending } from 'src/app/store/pending';
import * as UserActions from './user.actions';

export const userFeatureKey = 'userState';

export interface UserStateInterface {
  pending: Pending;
  name: string;
  email: string;
  id: string;
}

export const initialState: UserStateInterface = {
  pending: Pending.None,
  name: '',
  email: '',
  id: '',
};

export const userReducer = createReducer(
  initialState,
  /*
   * Get Current User
   */
  on(UserActions.GetCurrentUser, (state) => ({
    ...state,
    pending: Pending.Active,
  })),
  on(UserActions.GetCurrentUserSuccess, (state, action) => ({
    ...state,
    pending: Pending.None,
    name: action.name,
    email: action.email,
    id: action.id,
  })),
  on(UserActions.GetCurrentUserError, (state) => ({
    ...state,
    pending: Pending.Error,
  })),
);
