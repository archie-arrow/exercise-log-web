import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EMAIL_REGEX } from 'src/app/@auth/validators';

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

  constructor() {}
}
