import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/@shared/interfaces/language-option.interface';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  switchLanguage(lang: Language): void {
    this.translate.use(lang);
  }
}
