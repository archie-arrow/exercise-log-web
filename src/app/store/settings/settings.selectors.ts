import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Language } from 'src/app/@shared/interfaces/language-option.interface';
import {
  settingsFeatureKey,
  SettingsStateInterface,
} from 'src/app/store/settings/settings.reducer';

export const selectSettingsState =
  createFeatureSelector<SettingsStateInterface>(settingsFeatureKey);

export const selectLanguage = createSelector(
  selectSettingsState,
  (state: SettingsStateInterface): Language => state.language,
);
