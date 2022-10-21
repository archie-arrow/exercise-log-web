import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { Language } from 'src/app/@core/interfaces/language-option.interface';
import { TranslationService } from 'src/app/@core/services/translation.service';
import { SettingsActions, SettingsActionsTypes } from 'src/app/store/settings/settings.actions';

@Injectable({ providedIn: 'root' })
export class SettingsEffects {
  /*
   * Change Language
   */
  changeLanguage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SettingsActionsTypes.ChangeLanguage),
        map(({ language }: { language: Language }) =>
          this.translationService.switchLanguage(language),
        ),
      );
    },
    { dispatch: false },
  );

  constructor(
    private actions$: Actions<SettingsActions>,
    private translationService: TranslationService,
  ) {}
}
