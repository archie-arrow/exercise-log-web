import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { menuItems } from 'src/app/@shared/constants';
import { MenuItemInterface } from 'src/app/@shared/interfaces/menuItem.interface';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<boolean>();

  title = '';

  constructor(private router: Router) {
    this.router.events.pipe(untilDestroyed(this)).subscribe(() => {
      this.title = this.getTitle(this.router.url);
    });
  }

  getTitle(url: string): string {
    return menuItems.find((item: MenuItemInterface) => item.redirect === url)?.name || '';
  }
}
