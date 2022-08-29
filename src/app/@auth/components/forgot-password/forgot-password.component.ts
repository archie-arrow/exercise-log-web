import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMAIL_REGEX } from 'src/app/@auth/validators';
import { AppState } from 'src/app/store/app.reducer';
import { ForgotPassword } from 'src/app/store/auth/auth.actions';
import { selectAuthPending, selectAuthPendingError } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .success-icon {
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class ForgotPasswordComponent {
  forgotPasswordControl = new FormControl<string>('', {
    validators: [Validators.required, Validators.pattern(EMAIL_REGEX)],
    nonNullable: true,
  });

  email = this.router.getCurrentNavigation()?.extras.state?.['email'];
  isEmailSended = false;

  isLoading$ = this.store.select(selectAuthPending);
  isPendingError$ = this.store.select(selectAuthPendingError);

  constructor(private store: Store<AppState>, private router: Router) {
    this.forgotPasswordControl.patchValue(this.email);
  }

  reset(): void {
    this.store.dispatch(ForgotPassword({ email: this.forgotPasswordControl.value }));
    this.isEmailSended = true;
  }
}
