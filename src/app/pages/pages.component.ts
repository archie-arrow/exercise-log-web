import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent {
  menuIsOpen = false;

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
