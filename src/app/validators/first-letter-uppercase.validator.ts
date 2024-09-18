import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
// let regex = /^[A-Z].*$/

export function firstLetterUppercaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && value.length > 0) {
      const isValid = value[0] === value[0].toUpperCase();
      return !isValid ? { firstLetterUppercase: true } : null;
    }
    return null;
  };
}
