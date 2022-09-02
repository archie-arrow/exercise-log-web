import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { comparePasswordsValidator } from 'src/app/@auth/validators';
import { AppState } from 'src/app/store/app.reducer';
import { ResetPassword, ResetPasswordSuccess } from 'src/app/store/auth/auth.actions';
import { selectAuthPending } from 'src/app/store/auth/auth.selectors';

export interface ResetPasswordFormInterface {
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent implements OnInit {
  token = '';
  form = new FormGroup<ResetPasswordFormInterface>(
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

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      this.token = params['token'];
    });
  }

  resetPassword(): void {
    const data = {
      token: this.token,
      password: this.form.getRawValue().password,
    };
    this.store.dispatch(ResetPassword({ data }));
  }
}
