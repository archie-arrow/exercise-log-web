import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-body-size',
  templateUrl: './body-size.component.html',
  styleUrls: ['./body-size.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodySizeComponent {}
