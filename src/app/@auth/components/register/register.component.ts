import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { comparePasswordsValidator, EMAIL_REGEX } from 'src/app/@auth/validators';

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

  constructor() {}
}
