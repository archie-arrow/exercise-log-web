import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EMAIL_REGEX } from 'src/app/@auth/validators';
import { AppState } from 'src/app/store/app.reducer';
import { Login, ResetAuthState } from 'src/app/store/auth/auth.actions';
import { selectAuthPending } from 'src/app/store/auth/auth.selectors';

export interface LoginFormInterface {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnDestroy {
  loginForm = new FormGroup<LoginFormInterface>({
    email: new FormControl('', {
      validators: [Validators.required, Validators.pattern(EMAIL_REGEX)],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  isLoading$ = this.store.select(selectAuthPending);

  constructor(private store: Store<AppState>) {}

  login(): void {
    const form = this.loginForm.getRawValue();
    this.store.dispatch(Login({ login: form }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(ResetAuthState());
  }
}
