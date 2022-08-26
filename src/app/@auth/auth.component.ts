import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SLIDER_ITEMS } from 'src/app/@auth/constants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AuthComponent {
  sliderItems = SLIDER_ITEMS;

  backgroundImageValue(current: string): string {
    return `url(assets/images/slider/${current})`;
  }
}
