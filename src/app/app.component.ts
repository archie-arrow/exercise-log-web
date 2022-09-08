import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/@shared/interfaces/language-option.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exercise-log';

  constructor(public translate: TranslateService) {
    translate.addLangs(Object.values(Language));
  }
}
