import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { Language } from 'src/app/@core/interfaces/language-option.interface';
import { AppState } from 'src/app/store/app.reducer';
import { selectLanguage } from 'src/app/store/settings/settings.selectors';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService, private store: Store<AppState>) {}

  switchLanguage(lang: Language): void {
    this.translate.use(lang);
  }

  initLanguageService(): void {
    this.translate.addLangs(Object.values(Language));
    this.store
      .select(selectLanguage)
      .pipe(take(1))
      .subscribe((lang: Language) => this.switchLanguage(lang));
  }
}
