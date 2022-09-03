import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { SLIDER_ITEMS } from 'src/app/@auth/constants';
import { AppState } from 'src/app/store/app.reducer';
import { ResetAuthState } from 'src/app/store/auth/auth.actions';

interface LanguageDropdownInterface {
  name: string;
}

@UntilDestroy()
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AuthComponent {
  sliderItems = SLIDER_ITEMS;

  language: LanguageDropdownInterface[];

  selectedLanguage!: LanguageDropdownInterface;

  constructor(private router: Router, private store: Store<AppState>) {
    this.router.events.pipe(untilDestroyed(this)).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.store.dispatch(ResetAuthState());
      }
    });

    this.language = [{ name: 'ENG' }, { name: 'УКР' }];
  }

  backgroundImageValue(current: string): string {
    return `url(assets/images/slider/${current})`;
  }
}
