import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exercise-log';

  constructor(public translate: TranslateService) {
    // Register translation languages
    translate.addLangs(['en', 'ua']);
    // Set default language
    translate.setDefaultLang('en');
  }
}
