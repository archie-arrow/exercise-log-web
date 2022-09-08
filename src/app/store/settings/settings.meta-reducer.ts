import { Action, ActionReducer } from '@ngrx/store';
import { settingsFeatureKey } from 'src/app/store/settings/settings.reducer';

export function SettingsMetaReducer<
  S extends { [key: string]: object },
  A extends Action = Action,
>() {
  let onInit = true;

  return function (reducer: ActionReducer<S, A>) {
    return function (state: S, action: A): S {
      const nextState = reducer(state, action);
      if (onInit) {
        onInit = false;
        const lsSettings = localStorage.getItem('settings');
        const savedState = lsSettings ? JSON.parse(lsSettings) : null;
        if (savedState) {
          return { ...nextState, [settingsFeatureKey]: savedState };
        }
        return nextState;
      }

      const stateToSave = nextState[settingsFeatureKey];
      localStorage.setItem('settings', JSON.stringify(stateToSave));
      return nextState;
    };
  };
}
