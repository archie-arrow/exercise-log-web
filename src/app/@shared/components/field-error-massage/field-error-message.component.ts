import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { RegisterFormInterface } from 'src/app/@auth/components/register/register.component';

export const ERROR_MESSAGE = {
  minlength: 'Min length should be ',
  maxlength: 'Max length should be ',
  required: 'This field is required!',
  pattern: 'This field is not correct',
  comparedPasswords: 'Passwords do not match',
};

@Component({
  selector: 'app-field-error-message',
  template: ` <ng-container *ngIf="control.touched && control.invalid">
    <small class="p-error block err-m">{{ errorMessage }}</small>
    <div class="empty-space"></div>
  </ng-container>`,
  styles: ['.empty-space {display: block; height: 0.5rem; width: 1rem;}'],
})
export class FieldErrorMessageComponent {
  @Input() control!: AbstractControl<string> | FormGroup<RegisterFormInterface>;

  get errorMessage(): string {
    const error = Object.keys(this.control.errors || {})[0];

    switch (error) {
      case 'required':
        return ERROR_MESSAGE.required;
      case 'pattern':
        return ERROR_MESSAGE.pattern;
      case 'minlength':
        return `${ERROR_MESSAGE.minlength} ${this.control.errors?.['minlength'].requiredLength}`;
      case 'maxlength':
        return `${ERROR_MESSAGE.maxlength} ${this.control.errors?.['maxlength'].requiredLength}`;
      case 'password':
        return ERROR_MESSAGE.comparedPasswords;
    }

    return '';
  }
}
