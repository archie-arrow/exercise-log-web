import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { menuItems } from 'src/app/@shared/constants';
import { MenuItemInterface } from 'src/app/@shared/interfaces/menuItem.interface';
import { AppState } from 'src/app/store/app.reducer';
import { GetCurrentUser } from 'src/app/store/user/user.actions';
import {
  selectUserEmail,
  selectUserLoading,
  selectUserName,
} from 'src/app/store/user/user.selectors';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<boolean>();

  title = '';
  userIsLoading$ = this.store.select(selectUserLoading);
  email$ = this.store.select(selectUserEmail);
  name$ = this.store.select(selectUserName);
  avatarLabel$ = this.name$.pipe(
    filter((res: string) => Boolean(res && res.length)),
    map((name) => name.split(' ').reduce((prev, next) => prev + next[0], '')),
  );

  constructor(private router: Router, private store: Store<AppState>) {
    this.router.events.pipe(untilDestroyed(this)).subscribe(() => {
      this.title = this.getTitle(this.router.url);
    });
    this.store.dispatch(GetCurrentUser());
  }

  getTitle(url: string): string {
    return menuItems.find((item: MenuItemInterface) => item.redirect === url)?.name || '';
  }
}
