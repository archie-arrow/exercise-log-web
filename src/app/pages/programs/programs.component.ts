import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramsComponent {}
