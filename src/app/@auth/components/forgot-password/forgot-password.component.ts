import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMAIL_REGEX } from 'src/app/@auth/validators';
import { AppState } from 'src/app/store/app.reducer';
import { ForgotPassword } from 'src/app/store/auth/auth.actions';
import { selectAuthPending } from 'src/app/store/auth/auth.selectors';

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
  isLoading$ = this.store.select(selectAuthPending);
  isEmailSended = false;

  constructor(private store: Store<AppState>, private router: Router) {
    this.forgotPasswordControl.patchValue(this.email, { onlySelf: true });
  }

  reset(): void {
    this.store.dispatch(ForgotPassword({ email: this.forgotPasswordControl.value }));
    this.isEmailSended = true;
  }
}
