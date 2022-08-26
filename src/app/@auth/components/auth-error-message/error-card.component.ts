import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { selectAuthErrorMessage, selectAuthPendingError } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-auth-error-message',
  template: ` <div class="error-card" *ngIf="errorAfterLoading$ | async">
    <div class="error-title">Oh, something went wrong...</div>
    <div class="error-message">note: {{ (message | async) || 'Please, try again later' }}</div>
  </div>`,
  styles: [
    `
      @import '../../../@themes/styles/variable';

      .error-card {
        border: solid 0.125rem $primary-300;
        border-radius: 0.6rem;
        padding: 1rem;
        margin-bottom: 1rem;
      }

      .error-title {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorCardComponent {
  message = this.store.select(selectAuthErrorMessage);
  errorAfterLoading$ = this.store.select(selectAuthPendingError);

  constructor(private store: Store<AppState>) {}
}
