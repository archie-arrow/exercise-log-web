import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    name: ['', []],
    email: ['', []],
    password: ['', []],
    confirm: ['', []],
  });

  constructor(private fb: FormBuilder) {}
}
