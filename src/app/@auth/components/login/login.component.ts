import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EMAIL_REGEX } from 'src/app/@auth/validators';
import { AppState } from 'src/app/store/app.reducer';
import { Login } from 'src/app/store/auth/auth.actions';
import {
  selectAuthErrorMessage,
  selectAuthPending,
  selectAuthPendingError,
} from 'src/app/store/auth/auth.selectors';

export interface LoginFormInterface {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../@themes/styles/global/auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm = new FormGroup<LoginFormInterface>({
    email: new FormControl('', {
      validators: [Validators.required, Validators.pattern(EMAIL_REGEX)],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
      nonNullable: true,
    }),
  });

  errorAfterLoading$ = this.store.select(selectAuthPendingError);
  isLoading$ = this.store.select(selectAuthPending);
  errorMessage$ = this.store.select(selectAuthErrorMessage);

  constructor(private store: Store<AppState>) {}

  login() {
    const form = this.loginForm.getRawValue();
    this.store.dispatch(Login({ login: form }));
  }
}
