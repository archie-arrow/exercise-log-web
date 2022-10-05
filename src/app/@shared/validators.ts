import { AbstractControl, ValidationErrors } from '@angular/forms';

export const EMAIL_REGEX = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
export const LETTERS_REGEX = '^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$';

export function comparePasswordsValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { password: true };
}
