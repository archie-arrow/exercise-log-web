import { Action, ActionReducer } from '@ngrx/store';
import { AuthActionsTypes } from './auth.actions';

interface ActionWithToken extends Action {
  token?: string;
}

export function addTokenToLocalStorage(
  reducer: ActionReducer<{ [key: string]: object }, ActionWithToken>,
) {
  return function x(state: { [key: string]: object }, action: ActionWithToken) {
    if (
      action.type === AuthActionsTypes.LoginSuccess ||
      action.type === AuthActionsTypes.RegisterSuccess
    ) {
      localStorage.setItem('token', action?.token || '');
    }

    return reducer(state, action);
  };
}
