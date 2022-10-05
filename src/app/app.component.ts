import { Component } from '@angular/core';
import { TranslationService } from 'src/app/@shared/services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'exercise-log';

  constructor(public translationService: TranslationService) {
    this.translationService.initLanguageService();
  }
}
