import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EMAIL_REGEX } from 'src/app/@auth/validators';
import { AppState } from 'src/app/store/app.reducer';
import { ResetAuthState } from 'src/app/store/auth/auth.actions';
import { selectAuthPending } from 'src/app/store/auth/auth.selectors';

export interface ForgotPasswordFormInterface {
  email: FormControl<string>;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnDestroy {
  forgotPasswordForm = new FormGroup<ForgotPasswordFormInterface>({
    email: new FormControl('', {
      validators: [Validators.required, Validators.pattern(EMAIL_REGEX)],
      nonNullable: true,
    }),
  });

  isLoading$ = this.store.select(selectAuthPending);

  constructor(private store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.store.dispatch(ResetAuthState());
  }
}
