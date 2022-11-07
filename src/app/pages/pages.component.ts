import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent {
  menuIsOpen = false;
  withPadding = true;

  constructor(private router: Router) {
    this.router.events.pipe(untilDestroyed(this)).subscribe(() => {
      this.withPadding = this.router.url !== '/workouts/create';
    });
  }

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
