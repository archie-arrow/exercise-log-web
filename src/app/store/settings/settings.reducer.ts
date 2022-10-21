import { createReducer, on } from '@ngrx/store';
import { Language } from 'src/app/@core/interfaces/language-option.interface';
import * as SettingsActions from './settings.actions';

export const settingsFeatureKey = 'settingsState';

export interface SettingsStateInterface {
  language: Language;
}

export const initialState: SettingsStateInterface = {
  language: Language.ENG,
};

export const settingsReducer = createReducer(
  initialState,
  /*
   * Change Language
   */
  on(SettingsActions.ChangeLanguage, (state, action) => ({
    ...state,
    language: action.language,
  })),
);
