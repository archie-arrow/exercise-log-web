import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMAIL_REGEX } from 'src/app/@auth/validators';
import { AppState } from 'src/app/store/app.reducer';
import { ResetAuthState, ResetPassword } from 'src/app/store/auth/auth.actions';
import { selectAuthPending, selectAuthPendingSuccess } from 'src/app/store/auth/auth.selectors';

export interface ForgotPasswordFormInterface {
  email: FormControl<string>;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styles: ['.success-icon {margin-bottom: 1rem}'],
})
export class ForgotPasswordComponent implements OnDestroy {
  forgotPasswordForm = new FormGroup<ForgotPasswordFormInterface>({
    email: new FormControl('', {
      validators: [Validators.required, Validators.pattern(EMAIL_REGEX)],
      nonNullable: true,
    }),
  });

  email = this.router.getCurrentNavigation()?.extras.state?.['email'];
  isLoading$ = this.store.select(selectAuthPending);
  isSuccessResetClick$ = this.store.select(selectAuthPendingSuccess);

  constructor(private store: Store<AppState>, private router: Router) {
    this.forgotPasswordForm.patchValue({ email: this.email });
  }

  ngOnDestroy(): void {
    this.store.dispatch(ResetAuthState());
  }

  resetPassword() {
    const email = this.forgotPasswordForm.controls.email.value;
    this.store.dispatch(ResetPassword({ email: email }));
  }
}
