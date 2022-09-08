import { Action, ActionReducer } from '@ngrx/store';
import { settingsFeatureKey } from 'src/app/store/settings/settings.reducer';

export function addLanguageToLocalStorage(reducer: ActionReducer<{ [key: string]: object }>) {
  return function x(state: { [key: string]: object }, action: Action) {
    localStorage.setItem('settings', JSON.stringify(state?.[settingsFeatureKey]) || '');

    const settingsState = JSON.parse(localStorage.getItem('settings') || '');

    return reducer(state ? { ...state, [settingsFeatureKey]: settingsState } : {}, action);
  };
}
