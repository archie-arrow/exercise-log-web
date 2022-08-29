import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { comparePasswordsValidator } from 'src/app/@auth/validators';
import { AppState } from 'src/app/store/app.reducer';
import { selectAuthPending } from 'src/app/store/auth/auth.selectors';

export interface ResetPasswordFormInterface {
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
  resetPasswordForm = new FormGroup<ResetPasswordFormInterface>(
    {
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
        nonNullable: true,
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    },
    [comparePasswordsValidator],
  );

  isLoading$ = this.store.select(selectAuthPending);

  constructor(private store: Store<AppState>) {}

  resetPassword(): void {}
}
