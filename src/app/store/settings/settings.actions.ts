import { createAction, props, union } from '@ngrx/store';
import { Language } from 'src/app/@shared/interfaces/language-option.interface';

export enum SettingsActionsTypes {
  ChangeLanguage = '[Translation Service] Change Language',
  ChangedLanguageSuccess = '[Translation Service] Changed Language Success',
}

/*
 * Change Language
 */
export const ChangeLanguage = createAction(
  SettingsActionsTypes.ChangeLanguage,
  props<{ language: Language }>(),
);

export const ChangedLanguageSuccess = createAction(
  SettingsActionsTypes.ChangedLanguageSuccess,
  props<{ language: Language }>(),
);

const actionsUnion = union({
  /*
   * Change Language
   */
  ChangeLanguage,
  ChangedLanguageSuccess,
});

export type SettingsActions = typeof actionsUnion;
