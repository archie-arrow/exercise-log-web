import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { comparePasswordsValidator, EMAIL_REGEX } from 'src/app/@auth/validators';
import { AppState } from 'src/app/store/app.reducer';
import { Register } from 'src/app/store/auth/auth.actions';
import {
  selectAuthErrorMessage,
  selectAuthPending,
  selectAuthPendingError,
} from 'src/app/store/auth/auth.selectors';

export interface RegisterFormInterface {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup<RegisterFormInterface>(
    {
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
        nonNullable: true,
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.pattern(EMAIL_REGEX)],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
        nonNullable: true,
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
        nonNullable: true,
      }),
    },
    [comparePasswordsValidator],
  );

  errorAfterLoading$ = this.store.select(selectAuthPendingError);
  isLoading$ = this.store.select(selectAuthPending);
  errorMessage$ = this.store.select(selectAuthErrorMessage);

  constructor(private store: Store<AppState>) {}

  register(): void {
    const form = this.registerForm.getRawValue();
    this.store.dispatch(Register({ register: form }));
  }
}
